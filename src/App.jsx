import React from 'react'
import { useState , useRef , useEffect} from 'react'
import './App.css'
import { Answer, Question, Head, History, ThemeButton} from './components'

import config from './config/config'

function App() {

  const [question, setQuestion] = useState('')
  const [result, setResult] = useState([])
  const latestResultRef = useRef(null)
  const [recentHistory, setRecentHistory] = useState(()=>{
      const savedHistory = localStorage.getItem('history')
      return savedHistory ? JSON.parse(savedHistory) : []
    }
  )
  const [selectedHistory, setSelectedHistory] = useState('')
  const [loader, setLoader] = useState(false)
  const [theme, setTheme] = useState('dark')                         //new

  //for scrolling to the new question-answer
  useEffect(() => {
    latestResultRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }, [result])

  //for saving new question to local storage history
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(recentHistory))
  }, [recentHistory])

  //for re-searching the recent search
  useEffect(() =>{
    if(selectedHistory){
      console.log(selectedHistory);
      submitQuestion(selectedHistory);
    }
  }, [selectedHistory])

  useEffect(() => {
    console.log(theme)
    if(theme == 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    
  }, [theme])


  //FUNCTION: making API request to Gemini
  const submitQuestion = async () => {

    const questionToAsk = question.trim() || selectedHistory.trim();

    if(!questionToAsk){
      return;
    }

    if(question){
      setRecentHistory((prev) => ([questionToAsk, ...prev])) 
    }

    const payload = {
      "contents": [{"parts": [{"text": questionToAsk}]}]
    }

    setLoader(true)
    try{
      let response = await fetch(
        config.geminiUrl,
        {
          method: "POST",
          headers:{
            'Content-Type': 'application/json',
            'X-goog-api-key': config.geminiApiKey
          },
          body: JSON.stringify(payload)
        }
      )

      if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json()
      const answer = data.candidates[0].content.parts[0].text

      // console.log(answer)

      setResult((prev) => ([...prev , {questionToAsk , answer}]))

    }catch(error){
      console.log(error)

      setResult((prev) => ([...prev, {questionToAsk , answer:"Sorry, service unavailable. Try again later!"}]))
    }
    setQuestion('')
    setSelectedHistory('')
    setLoader(false)
  }

  //function to clear history from local storage (triggers useEffect)
  const clearHistory = () => {
    setRecentHistory([])
  }

  // console.log(recentHistory)

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 dark:bg-zinc-800 bg-amber-200'>
        <History 
          historyList={recentHistory} 
          clearHistory={clearHistory} 
          setSelectedHistory={setSelectedHistory}
        />
        <div className=' fixed bottom-2 left-2'>
          <ThemeButton setTheme={setTheme} />
        </div>
      </div>

      <div className='col-span-4 px-25 py-5'>
        <Head />
        <div className='container h-110 overflow-y-auto hide-scrollbar px-10'>
          <div className="text-zinc-300">

            <ul>
              {result && 
                result.map((res, index) => (
                  
                  <li 
                    key={index}
                    ref={index === result.length-1 ? latestResultRef : null}
                    className='mb-10 list-none'
                  >
                    <Question text={res.questionToAsk}/>
                    <Answer ans={res.answer} index={index} />
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
        
        <div className='loading_svg h-7.5'>
          { loader && 
            <div role="status">
              <svg aria-hidden="true" className="inline w-10 h-10 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101"  fill={theme==='dark'?'white':'orange'} xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"  fill={theme==='dark'?'black':'#FFCC66'}/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          }
        </div>
        
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            submitQuestion();
          }}
          className='dark:bg-zinc-800 bg-amber-200 w-[80%] mx-auto dark:text-zinc-200 text-zinc-700 
                      rounded-3xl border dark:border-zinc-500 border-amber-400 flex mt-5 mb-2'
        >
            <input 
              type='text' 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder='Ask me anything' 
              className='w-full px-5 text-md outline-none'
              name='question'
              autoComplete='off'
              />
            <button 
              className='text-md py-2 dark:bg-zinc-700 bg-amber-300 dark:hover:bg-zinc-600 hover:bg-amber-200 rounded-r-3xl 
                        px-5 active:scale-90 transition-all duration-100 cursor-pointer'
              
            >
              Ask
            </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default App

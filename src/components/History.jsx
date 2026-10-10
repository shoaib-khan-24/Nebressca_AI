import React from 'react'

function History({historyList, clearHistory, setSelectedHistory}) {
  return (
    <>
    <div className='my-10 px-5 text-left'>
      <div className='dark:text-zinc-200 text-zinc-700 text-lg font-medium mb-5 flex'>
        <span className='mr-2'>Recent Searches</span>
        
        {historyList.length > 0 &&
          <button 
          onClick={clearHistory}
          className='cursor-pointer select-none focus:outline-none'
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#696969"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/></svg>
          </button>
        }
      </div>

      <div className='dark:bg-zinc-800 bg-amber-200  overflow-hidden'>
        <ul className='max-h-[70vh] overflow-y-auto hide-scrollbar'>
            {historyList.length > 0 ? (
              historyList.map((item, index) => (
                <li 
                  onClick={() => setSelectedHistory(item)}
                  key={index}
                  className="px-2 py-2 text-sm dark:text-zinc-400 text-zinc-800 rounded-2xl select-none
                            truncate hover:bg-zinc-700/50 hover:text-zinc-100 cursor-pointer transition"
                >
                    {item}
                </li>
              )))
              :
              (
                <li 
                  className="px-2 py-5 text-sm text-zinc-500 text-center"
                >
                  No recent questions
                </li>

              )


            }
        </ul>
      </div>
    </div>
    </>
  )
}

export default History
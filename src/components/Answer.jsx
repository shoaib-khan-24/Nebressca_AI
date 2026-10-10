import ReactMarkdown from 'react-markdown'

function Answer({ans, index}){

    return (
        <div className='text-left dark:text-zinc-300 text-zinc-600 p-4 mt-3'>
            <ReactMarkdown
                components={{
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold mb-3">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold mb-2">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-semibold mb-2">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="mb-3 leading-7">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 mb-3">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal pl-6 mb-3">{children}</ol>
                    ),
                }}
            >{ans}</ReactMarkdown>
        </div>
    )
}

export default Answer
import React from 'react'

function Question({text}) {
  return (
    <div className='dark:text-zinc-300 text-zinc-700 text-right text-md dark:bg-zinc-800 bg-amber-200 py-2 
                    px-5 rounded-3xl w-fit max-w-[60%] ml-auto'
    >
      {text}
    </div>
  )
}

export default Question
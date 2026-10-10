import React from 'react'

function ThemeButton({setTheme}) {
  return (
    <>
        <select 
          onChange={(e) => (
            setTheme(e.target.value)
          )}
          className='dark:text-white text-zinc-700 text-md border px-1 rounded-2xl dark:bg-zinc-800 bg-amber-200'
        >
            <option  value="dark">Dark</option>
            <option  value="light">Light</option>
            
        </select>
    </>
  )
}

export default ThemeButton
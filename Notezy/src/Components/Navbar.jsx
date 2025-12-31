import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className='w-full flex justify-between mt-3 px-10 align-center border-2 border-b-black rounded-2xl bg-[#db94d1] absolute h-15'></div>
    <div className='bg-amber-300 w-full mt-3 flex justify-between px-10 h-13 align-center border-2 border-black rounded-2xl absolute'>
      <div className="logo self-center text-2xl font-bold">
        Notezy
      </div>
      <div className="search flex gap-5">
        <input className='bg-white rounded-2xl border-2 border-black h-9 self-center px-5' type="text" placeholder='Search Notes...'/>
        <button className='w-9 h-9 rounded-3xl border-2 border-black flex justify-center self-center bg-[#db94d1]'><svg class="self-center w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>
</button>
      </div>
          </div>

    </>
  )
}

export default Navbar

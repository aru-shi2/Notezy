import React from 'react'

const Notes = () => {
  return (
    <div>
      <div className="note h-screen">
        <div className="btn absolute bottom-6 right-6 ">
            <button className='border-2 size-15 border-black rounded-4xl bg-[#db94d1] flex justify-center items-center'><svg class="w-10 h-10 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
</svg></button>
        </div>
      </div>
    </div>
  )
}

export default Notes

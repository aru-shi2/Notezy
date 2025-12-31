import React from 'react'

const Note = () => {
  return (
    <div className=' h-full'>

        <div className="btns flex justify-between">
            <button className='border-2'>Delete</button>
            <button className='border-2'>Save</button>
        </div>

        <div className='w-full flex justify-between mt-3 px-10 align-center border-2 border-b-black rounded-2xl bg-[#db94d1] absolute h-17'></div>
      <div className="title bg-white w-full mt-3 flex justify-between h-15 align-center border-2 border-black rounded-2xl
      absolute">
        <textarea className='flex items-center font-extrabold rounded-2xl text-2xl w-full h-15' placeholder='Enter Title...' name="" id=""></textarea>
      </div>
      <div className="content relative top-30 bg-amber-400 border-2 border-black h-[70%]">
        <textarea className='h-full w-full' placeholder='Enter Note...'  name="" id=""></textarea>
      </div>

      <div className="btn absolute bottom-6 right-6 ">
            <button className='border-2 size-15 border-black rounded-4xl bg-[#db94d1] flex justify-center items-center'>Edit</button>
        </div>
    </div>
  )
}

export default Note

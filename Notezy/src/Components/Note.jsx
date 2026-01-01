import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Notes from './Notes';
import {v4 as uuidv4} from "uuid";

const Note = () => {
    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")

 const navigate=useNavigate();

    const handleSave=() => {
      const notes={
        id:uuidv4(),
        title:Title,
        content:Content,
      };
      const oldnotes=localStorage.getItem("notes") || []
      const updatednotes=[...oldnotes,notes]
      localStorage.setItem("notes",JSON.stringify(updatednotes))
      navigate("/")
    }
    

  return (
    <div className=' h-full'>

        <div className="btns flex justify-between">
            <button className='border-2'>Delete</button>
            <button onClick={handleSave} className='border-2'>Save</button>
        </div>

        <div className='w-full flex justify-between mt-3 px-10 align-center border-2 border-b-black rounded-2xl bg-[#db94d1] absolute h-17'></div>
      <div className="title bg-white w-full mt-3 flex justify-between h-15 align-center border-2 border-black rounded-2xl
      absolute">
        <textarea onChange={(e)=>(
            setTitle(e.target.value))} className='flex items-center font-extrabold rounded-2xl text-2xl w-full h-15' placeholder='Enter Title...' value={Title}></textarea>
      </div>
      <div className="content relative top-30 bg-amber-400 border-2 border-black h-[70%]">
        <textarea onChange={(e)=>(
            setContent(e.target.value))} value={Content} className='h-full w-full' placeholder='Enter Note...'  name="" id=""></textarea>
      </div>

      <div className="btn absolute bottom-6 right-6 ">
            <button className='border-2 size-15 border-black rounded-4xl bg-[#db94d1] flex justify-center items-center'>Edit</button>
        </div>
    </div>
  )
}

export default Note

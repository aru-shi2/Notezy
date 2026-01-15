import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Notes from './Notes';
import {v4 as uuidv4} from "uuid";
import { useParams } from 'react-router-dom';

const Note = ({setnotes,notes}) => {
  const {id}=useParams();
    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")

useEffect(() => {
   if(id){
      const n=notes.find(i=>i.id===id)
        setTitle(n.title)
        setContent(n.content)
   }
}, [])


 const navigate=useNavigate();

    const handleSave=() => {
      if(!Title && !Content){
        alert('enter note')
      }
      else if(Title && Content && !id){
        const note={
        id:uuidv4(),
        title:Title,
        content:Content,
      };
      setnotes(prevnotes=>[...prevnotes,note])
      }
      else {
           setnotes(notes.map((t)=>{
            if(t.id===id){
              return {...t,title:Title,content:Content}
            }
            return t
           }))
          }
      navigate("/");

    }
    

  return (
    <div className=' h-full'>

        <div className="btns flex justify-between">
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
    </div>
  )
}

export default Note

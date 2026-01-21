import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";

const Notes = ({notes,setnotes}) => {
  const navigate=useNavigate();

  const handleAdd=() => {
    navigate("/note")
  }
  
  const handleDelete=(id) => {
    setnotes(notes.filter(n=>n.id!=id))
  }

  const handleEdit=(id) => {
        navigate(`/note/${id}`)
  }
  
  return (
    <div>
      <div className="note h-screen border-box">
        <div className="btn absolute bottom-15 sm:bottom-25 right-15 sm:right-25 z-50">
            <button onClick={handleAdd} className='border-2 size-15 border-black rounded-4xl flex justify-center items-center bg-[#cfad77] hover:bg-[#ca8144] hover:scale-95 hover:transition-transform hover:ease-out absolute z-50'><IoMdAdd size={40}/></button>
        </div>
        
        <div className="h-screen overflow-y-auto">
        <div className="pt-40 sm:pt-25 note flex flex-wrap h-screen gap-6 overflow-y-auto sm:justify-center md:justify-start pr-10 pl-10">
          {notes.map((notee)=>(
            <div style={{backgroundColor:notee.color}} key={notee.id} className="title relative flex flex-col h-70 pt-5 w-63 rounded-3xl px-5 flex-wrap border-2 border-black hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.08)]">
              <div className=" h-[25%] title font-semibold text-2xl whitespace-normal break-all overflow-hidden pb-10">
                {notee.title}
              </div>
              <div className='border-b border-black-600 mt-3 mb-3 opacity-30'></div>
              <div className="content whitespace-normal break-all">
                {notee.content}
              </div>
              <div className="btns flex absolute space-x-8 sm:space-x-15 bottom-5">
                <button onClick={()=>handleDelete(notee.id)} className='border font-medium border-black px-3 rounded-xl h-10 bg-[#7a7878] hover:bg-[#d43434] hover:scale-95 hover:transition-transform hover:ease-out'>Delete</button>
                <button onClick={()=>handleEdit(notee.id)} className='border font-medium px-5 hover:bg-[#5c5252] hover:scale-95 hover:transition-transform hover:ease-out rounded-xl h-10 bg-[#7a7878]'>Edit</button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Notes

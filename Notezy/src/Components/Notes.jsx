import React from 'react'
import { useNavigate } from 'react-router-dom'

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
      <div className="note h-screen">
        <div className="btn absolute bottom-6 right-6 ">
            <button onClick={handleAdd} className='border-2 size-15 border-black rounded-4xl flex justify-center items-center bg-[#ca8144]'><svg class="w-10 h-10 text-gray-600 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
</svg></button>
        </div>

        <div className="note flex flex-wrap h-screen gap-6">
          {notes.map((notee)=>(
            <div style={{backgroundColor:notee.color}} key={notee.id} className="title relative mt-4 top-25 flex flex-col h-70 w-63 rounded-3xl px-5 pt-5 flex-wrap border-2 border-black hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.08)]">
              <div className=" h-[25%] title font-semibold text-2xl whitespace-normal break-all overflow-hidden pb-10">
                {notee.title}
              </div>
              <div className='border-b border-black-600 mt-3 mb-3 opacity-30'></div>
              <div className="content whitespace-normal break-all">
                {notee.content}
              </div>
              <div className="btns absolute space-x-15 bottom-5">
                <button onClick={()=>handleDelete(notee.id)} className='border-1 font-medium border-black px-3 rounded-xl h-10 bg-[#7a7878] hover:bg-[#d43434] hover:scale-95 hover:transition-transform hover:ease-out'>Delete</button>
                <button onClick={()=>handleEdit(notee.id)} className='border-1 font-medium px-5 hover:bg-[#5c5252] hover:scale-95 hover:transition-transform hover:ease-out rounded-xl h-10 bg-[#7a7878]'>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notes

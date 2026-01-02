import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notes = ({notes,setnotes}) => {
  console.log(notes)
  const navigate=useNavigate();
  const handleAdd=() => {
    navigate("/note")
  }
  
  const handleDelete=(id) => {
    console.log(id)
    setnotes(notes.filter(n=>n.id!=id))
  }
  
  
  return (
    <div>
      <div className="note h-screen">
        <div className="btn absolute bottom-6 right-6 ">
            <button onClick={handleAdd} className='border-2 size-15 border-black rounded-4xl bg-[#db94d1] flex justify-center items-center'><svg class="w-10 h-10 text-gray-600 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
</svg></button>
        </div>

        <div className="note flex flex-wrap h-screen gap-5">
          {notes.map((notee)=>(
            <div key={notee.id} className="title relative mt-4 top-30 flex flex-col bg-green-600 h-60 w-60 rounded-3xl px-10 pt-5">
              <div className="title text-2xl ">
                {notee.title}
              </div>
              <div className="content">
                {notee.content}
              </div>
              <div className="btns absolute space-x-20 bottom-5">
                <button onClick={()=>handleDelete(notee.id)} className='border-2 '>Delete</button>
                <button className='border-2 '>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notes

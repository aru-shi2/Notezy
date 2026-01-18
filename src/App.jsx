import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Notes from './Components/Notes'
import Note from './Components/Note'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [notes, setnotes] = useState([])
  const [K, setK] = useState("")
  
  useEffect(() => {
    const storednotes=JSON.parse(localStorage.getItem('notes'))||[]
    setnotes(storednotes)
  },[])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])
  
  const newn=notes.filter((t)=>{
    const key=K.toLowerCase();
    return(
      t.title.toLowerCase().includes(key)||t.content.toLowerCase().includes(key)
    )
  })

  return (
    <>
      <div className="main min-w-full min-h-screen relative flex justify-center px-10 bg-[#dfcba1]">
        <div className="min-h-screen w-[75%] relative opacity-100 bg-[#f5f3ff]">
  <div
    className="absolute inset-0 z-0 opacity100"
    style={{
      backgroundImage: `
        linear-gradient(to right, #a7562e 1px, transparent 1px),
        linear-gradient(to bottom, #a7562e 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
    <div className="content absolute h-screen w-full flex justify-center px-5">
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<><Navbar onSearch={setK}/><Notes notes={K?newn:notes} setnotes={setnotes}/></>}/>
        <Route path='/note' element={<Note setnotes={setnotes}/>}/>
        <Route path='/note/:id' element={<Note setnotes={setnotes} notes={notes}/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  </div>
  </div>
    </>
  )
}

export default App


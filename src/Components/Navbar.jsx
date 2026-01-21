import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({onSearch}) => {

  const [Key, setKey] = useState("")
  const [Searching, setSearching] = useState(false)

  const Search=() => {
     if(Key){
      onSearch(Key)
      setSearching(true)
     }
  }
  

  return (
    <>
    <div className='flex justify-center'>
      <div className='bg-[#cfad77] sm:w-[90%] w-full h-fit mt-3 flex flex-col items-center sm:items-center gap-5 sm:flex-row sm:justify-between px-2 sm:px-10 sm:h-13 shadow-[3px_4px_0px_#a36c14,3px_4px_0px_2px_black] border-2 border-black rounded-2xl absolute z-50'>
      <div className="logo self-center text-xl sm:text-2xl font-bold">
        Notezy
      </div>
      <div className="search sm:mt-5 flex items-center pb-5 gap-3 sm:gap-5">
        <input onChange={(e)=>(
            setKey(e.target.value))} value={Key} className='bg-white sm:w-auto w-fit rounded-2xl border-2 border-black h-9 self-center px-3 sm:px-5' type="text" placeholder='Search Notes...'/>
      {Searching?
      <button onClick={()=>{setKey(""), onSearch(""), setSearching(false)}} className='hover:bg-[#be2020] hover:scale-95 hover:transition-transform hover:ease-out font-extrabold w-9 h-9 rounded-3xl border-2 border-black flex justify-center items-center self-center bg-[#ca8144]'><RxCross2 size={25} /></button>
      :<button onClick={Search} className='w-9 h-9 rounded-3xl border-2 border-black flex justify-center items-center self-center bg-[#ca8144] hover:scale-95 hover:transition-transform hover:ease-out'>
      <FaSearch />
</button>}
      </div>
          </div>
    </div>

    </>
  )
}

export default Navbar

import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from "uuid";
import { useParams } from 'react-router-dom';
import { MdOutlineDone} from "react-icons/md";

function Note({ setnotes, notes }) {
const { id } = useParams();
const [Title, setTitle] = useState("");
const [Content, setContent] = useState("");

useEffect(() => {
if (id) {
const n = notes.find(i => i.id === id);
setTitle(n.title);
setContent(n.content);
}
}, []);

function getColors() {
return `hsl(${Math.random() * 360},20%,60%)`;
}

const navigate = useNavigate();

const handleSave = () => {
if (!Title && !Content) {
alert('enter note');
}
else if (Title || Content && !id) {
const note = {
id: uuidv4(),
title: Title,
content: Content,
color: getColors(),
};
setnotes(prevnotes => [...prevnotes, note]);
}
else {
setnotes(notes.map((t) => {
if (t.id === id) {
return { ...t, title: Title, content: Content };
}
return t;
}));
}
navigate("/");

};

return (
<div className='h-screen w-full flex flex-col items-center'>
<div className="title w-[95%] bg-[#e4d1b4] mt-10 shadow-[4px_5px_0px_#c7914a,4px_5px_0px_2px_black] border-2 border-black rounded-2xl">
<textarea onChange={(e) => (
setTitle(e.target.value))} className='focus:outline-none pt-2 flex items-center font-extrabold rounded-2xl text-2xl w-full px-5 content-center' placeholder='Enter Title...' value={Title}></textarea>
</div>
<div className="shadow-[6px_6px_0px_#c7914a,6px_6px_0px_2px_black]  font-medium rounded-4xl px-5 pt-5 text-lg content relative top-10 bg-[#ecd9b4] border-2 border-black h-[73%] w-[95%]">
<textarea onChange={(e) => (
setContent(e.target.value))} value={Content} className=' focus:outline-none h-full w-full' placeholder='Enter Note...' name="" id=""></textarea>
</div>
<div className="btn absolute bottom-10 right-15">
<button className='w-15 h-15 rounded-4xl border-2 border-black flex justify-center items-center self-center bg-[#c7914a]  
hover:bg-[#a8580e] hover:scale-95 hover:transition-transform hover:ease-out' onClick={handleSave}><MdOutlineDone size={35}/></button>
</div>
</div>
);
}

export default Note
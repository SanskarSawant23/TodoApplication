

import React, { useState } from 'react'

export const CreateTodo = () => {
const [title, setTitle] = useState('');
const [description, setDescription]= useState('');


const titlehandler = (value)=>{
    setTitle(value)
    
}
const descriptionhandler = (value)=>{
    setDescription(value)
    
}



const onClickHandler = ()=>{
    console.log("title:", title);
    console.log("Description:", description)
    fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            description: description
            
        }),
        headers: {
            "content-Type":"application/json"
        }
    })
    setTitle("")
    setDescription("")
}
  return (
    <div>
        <input type="text" placeholder='title' 
        onChange={(e)=>titlehandler(e.target.value)}
        /> <br />
        <input type="text" placeholder='description'
        onChange={(e)=>descriptionhandler(e.target.value)} /> <br />


        <button onClick={onClickHandler}>Add a Todo</button>
    </div>
  )
}

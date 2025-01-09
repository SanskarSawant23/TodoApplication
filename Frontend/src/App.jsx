import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
 const [todos, setTodos] = useState([]);
 
 //empty todos array that will be fetched from the backend

 useEffect(()=>{
  fetch("http://localhost:3000/todo")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.Todos)
  })

 },[])
 
  console.log(todos)
  return (
    <>
    <CreateTodo/>
    <Todos/>
    </>
  )
}

export default App

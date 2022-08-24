import React,{useState, useEffect} from 'react'
// import  {TrashIcon}  from '@heroicons/react/outline'
import TaskItem from '../components/TaskItem'
import {v4 as uuid} from "uuid"



function TaskManager() {
  const [tasks, setTasks]=useState(()=>{
    const tasks = localStorage.getItem('tasks');
    if (!tasks)return [];
    return JSON.parse(tasks)
  });
  const [input, setInput]=useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
if (input ==="") return;

const newTask ={
  id:uuid(),
  text:input,
  completed:false,
};

setTasks([newTask, ...tasks]);
setInput("")
localStorage.setItem('tasks',JSON.stringify(tasks))
}
const handleDelete= (id)=>{
  const newTasks= tasks.filter(task=>task.id !==id);
  setTasks(newTasks)
}

useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks)); //local storage
},[tasks]);

  return (
  <div className='h-screen bg-blue-600 flex justify-center items-center'>
    <div className='max-w-xl bg-white rounded-xl px-5 py-10 max-h-96 overflow-hidden'>
        <form action="" onSubmit={handleSubmit} 
          className='space-x-5 flex w-[30rem] mb-10'>
          <input type="text" onChange={(event)=>setInput(event.target.value)} value={input} className='border-2 border-blue-400 p-2 rounded-md outline-none w-10/12'/>
          <button type="submit"  disabled={input===""} className='bg-blue-600 text-white text-lg py-2 px-5 rounded-md'>Add</button>
        </form>
          <div className='space-y-2 overflow-y-auto h-56'>
            {
              tasks.map((task)=>(<TaskItem key={task.id} task={task} handleDelete={handleDelete}/>
              ))}
          </div>
    </div>
  </div>
  )
}

export default TaskManager
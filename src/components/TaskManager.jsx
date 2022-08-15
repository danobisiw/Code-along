import React,{useState} from 'react'
// import  {TrashIcon}  from '@heroicons/react/outline'
import TaskItem from './TaskItem'



function TaskManager() {
  const [tasks, setTasks]=useState([]);
  const [input, setInput]=useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();

if (input ==="") return;
setTasks([input, ...tasks]);
setInput("")
}
const handleDelete= index=>{
  const newTasks= tasks.filter(task=>task !==index);
  setTasks(newTasks)
}

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
              tasks.map((task)=>(<TaskItem task={task} handleDelete={handleDelete}/>
              ))}
          </div>
    </div>
  </div>
  )
}

export default TaskManager
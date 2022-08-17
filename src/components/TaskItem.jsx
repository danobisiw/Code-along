import React from 'react'
import { TrashIcon } from '@heroicons/react/outline'


function TaskItem({task, handleDelete}) {
return (
    <div className='flex items-center bg-teal-100 p-2 border-2 border-gray-300 rounded-md justify-between' >
        <div className='flex space-x-2'>
        <input type="checkbox" name='' id='' checked={task.completed} onChange={()=>{}}/>
        <div className='flex-1'>{task.text}</div>
        </div>
        <button onClick={()=> handleDelete(task.id)} className='bg-blue-800 rounded-md p-2'><TrashIcon height={24} color="white"/></button>
    </div>
)
}


export default TaskItem
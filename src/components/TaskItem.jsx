import React from "react";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";

function TaskItem({ task, handleDelete, handleCompleted, handleEdit }) {
  return (
    <div className="flex items-center justify-between bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
      <div className=" flex space-x-2">
        <input
          type="checkbox"
          name=""
          id=""
          checked={task.completed}
          onChange={() => handleCompleted(task.id)}
        />
        <div className="flex-1">{task.text}</div>
      </div>
      <div className="space-x-2">
        <button className="bg-blue-800">
          <PencilAltIcon
            height={30}
            color="white"
            onClick={() => handleEdit(task.id)}
          />
        </button>
       
        <button className="bg-red-800 rounded-md p-2">
          <TrashIcon
            height={24}
            color="white"
            onClick={() => handleDelete(task.id)}
          />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;

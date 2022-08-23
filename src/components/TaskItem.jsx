import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

function TaskItem({ task }) {
  return (
    <div className="flex items-center bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
      <div className="flex-1">{task.text}</div>
      <div className="bg-blue-800 rounded-md p-2">
        <TrashIcon height={24} color="white" />
      </div>
    </div>
  );
}

export default TaskItem;

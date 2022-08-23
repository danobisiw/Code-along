import React, { useState } from "react";
// import  {TrashIcon}  from '@heroicons/react/outline'
import TaskItem from "./TaskItem";
import useLocalStorage from "../hooks/useAxios";
import { v4 as uuidv4 } from "uuid";

function TaskManager() {
  const { data, setValue } = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === "") return;

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    setValue(newTask, ...data);
    setInput("");
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  const handleDelete = (id) => {
    const newTasks = data.filter((task) => task.id !== id);
    setValue(newTasks);
  };

  return (
    <div className="h-screen bg-blue-600 flex justify-center items-center">
      <div className="max-w-xl bg-white rounded-xl px-5 py-10 max-h-96 overflow-hidden">
        <form
          action=""
          onSubmit={handleSubmit}
          className="space-x-5 flex w-[30rem] mb-10"
        >
          <input
            type="text"
            className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <button
            type="submit"
            disabled={input === ""}
            className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md"
          >
            Add
          </button>
        </form>
        <div className="space-y-2 overflow-y-auto h-56">
          {data.map((task) => (
            <TaskItem task={task} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;

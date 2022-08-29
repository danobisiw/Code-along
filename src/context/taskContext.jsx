import { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


//create the fetch
export const TaskContext = createContext({
  tasks: [],
  setValue: (tasks) => {},
});

//create the context function
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { data, setValue } = useLocalStorage("Task", []);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  return (
    <TaskContext.Provider value={{ tasks, setValue }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);

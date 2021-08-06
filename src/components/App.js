import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS)

  function handleDeleteTask(deletedTask) {
    setTask(TASKS.filter(task => task !== deletedTask));
  };
  console.log(TASKS)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={TASKS} deleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

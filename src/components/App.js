import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategory] = useState(CATEGORIES);

  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter(task => task !== deletedTask));
  };
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} tasks={tasks}/>
      <NewTaskForm />
      <TaskList tasks={tasks} deletedTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

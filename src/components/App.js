import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  const filteredCategories = tasks.filter(task => category === "All" ? tasks : task.category === category);

  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter(task => task !== deletedTask));
  };

  function handleCategoryFilter(buttonCategory) {
    setCategory(buttonCategory);
    // setTasks(filteredCategories);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleCategoryFilter} selectedCategory={category} />
      <NewTaskForm />
      <TaskList tasks={tasks} deletedTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

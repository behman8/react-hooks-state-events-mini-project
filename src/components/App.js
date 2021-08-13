import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  const filteredCategories = tasks.filter(task => category === "All" ? tasks : task.category === category);
  const [details, setDetails] = useState("");
  const [formCategory, setFormCategory] = useState("Code");

  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter(task => task !== deletedTask));
  };

  function handleCategoryFilter(buttonCategory) {
    setCategory(buttonCategory);
  };

  function handleDetailsChange(event) {
    setDetails(event.target.value)
  };

  function handleCategoryChange(event) {
    setFormCategory(event.target.value)
  };

  function handleSubmit() {
    
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleCategoryFilter} selectedCategory={category} />
    <NewTaskForm categories={CATEGORIES} details={details} handleDetailsChange={handleDetailsChange} handleCategoryChange={handleCategoryChange}/>
      <TaskList tasks={filteredCategories} deletedTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

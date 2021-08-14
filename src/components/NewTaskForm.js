import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [formCategory, setFormCategory] = useState("Code");
  
  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      category: formCategory,
      text: details
    };
    onTaskFormSubmit(newTask);
    setDetails("");
    setFormCategory("Code");
  };
  
  const categoryOptions = categories.map(
    (category) => 
    category === "All" ? 
    null : <option value={category} key={uuid()}>{category}</option>);
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={event => setDetails(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={event => setFormCategory(event.target.value)}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

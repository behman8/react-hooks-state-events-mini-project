import React from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, details, handleDetailsChange, handleCategoryChange }) {
  const categoryOptions = categories.map(
    (category) => 
    category === "All" ? 
    null : <option value={category} key={uuid()}>{category}</option>);
  
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailsChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

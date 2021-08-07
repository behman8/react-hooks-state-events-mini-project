import React from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter( { categories, handleFilter, selectedCategory } ) {
  console.log(selectedCategory)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => 
      selectedCategory === category ? 
      <button 
        className="Selected" 
        onClick={handleFilter} 
        key={uuid()}>
        {category}
      </button> :
      <button 
        className={null} 
        onClick={handleFilter} 
        key={uuid()}>
        {category}
      </button>
      )}
    </div>
  );
}

export default CategoryFilter;

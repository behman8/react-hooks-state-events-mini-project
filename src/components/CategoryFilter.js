import React from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter( { categories, handleFilter, selectedCategory } ) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => 
      category === selectedCategory ? 
      <button 
        className="" 
        onClick={() => handleFilter(category)}
        key={uuid()}>
        {category}
      </button> :
      <button 
        className="selected" 
        onClick={() => handleFilter(category)}
        key={uuid()}>
        {category}
      </button>
      )}
    </div>
  );
}

export default CategoryFilter;

import React from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter( { categories, tasks } ) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => <button key={uuid()}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;

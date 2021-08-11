import React from "react";

function Task( { deletedTask, task, category, text } ) {
  return (
    <div className="task">
      <div className="label"><h1>{category}</h1></div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deletedTask(task)}>X</button>
    </div>
  );
}

export default Task;

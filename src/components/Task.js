import React from "react";

function Task( {deleteTask, task} ) {

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.test}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;

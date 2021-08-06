import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList( { tasks, deleteTask } ) {

  return (
    <div className="tasks">
      {tasks.map(task => <Task key={uuid()} deleteTask={deleteTask} task={task}/>)}
    </div>
  );
}

export default TaskList;

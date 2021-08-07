import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList( { tasks, deletedTask } ) {

  return (
    <div className="tasks">
      {tasks.map(task => <Task key={uuid()} deletedTask={deletedTask} task={task} category={task.category} text={task.text}/>)}
    </div>
  );
}

export default TaskList;

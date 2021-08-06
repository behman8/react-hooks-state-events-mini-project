import React, { useState } from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList( {tasks} ) {
  const [deleteTask, setDeleteTask] = useState(tasks)

  function handleDeleteTask() {
    const taskDeleted = tasks.filter(task => task != task.uuid());
    setDeleteTask(taskDeleted);
  };

  return (
    <div className="tasks">
      {tasks.map(task => <Task key={uuid()} deleteTask={handleDeleteTask} task={task}/>)}
    </div>
  );
}

export default TaskList;

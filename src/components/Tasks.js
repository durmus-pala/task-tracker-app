import React from "react";
import Task from "./Task";

export default function Tasks({ tasks, deleteTask, toggleDone }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
}
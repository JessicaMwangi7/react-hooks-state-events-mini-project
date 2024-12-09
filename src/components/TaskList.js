import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* Display a list of tasks using the Task component */}
      {tasks.map((task) => (
        <Task 
          key={task.text} // Unique key prop for each task
          text={task.text} 
          category={task.category} 
          onDelete={onDeleteTask} // Pass the onDeleteTask function to each Task
        />
      ))}
    </div>
  );
}

export default TaskList;

import React from "react";
import UseTask from "../../Hooks/UseTask";

const Todo = () => {
  const [taskitems] = UseTask();

  return (
    <div>
      {taskitems.map((item) => (
        <div>{item.task}</div>
      ))}
    </div>
  );
};

export default Todo;

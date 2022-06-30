import { useEffect, useState } from "react";

const UseTask = () => {
const [taskitems, setTaskItems] = useState([])  
useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTaskItems(data));
  }, []);
  return [taskitems];
}

export default UseTask;

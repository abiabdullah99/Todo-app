import { useEffect, useState } from "react";

const UseTask = () => {
const [taskitems, setTaskItems] = useState([])  
useEffect(() => {
    fetch("https://bagged-worms-62459.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTaskItems(data));
  }, []);
  return [taskitems];
}

export default UseTask;

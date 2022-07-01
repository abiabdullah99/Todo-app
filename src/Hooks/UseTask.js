import { useEffect, useState } from "react";

const UseTask = () => {
  const [taskitems, setTaskItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://bagged-worms-62459.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTaskItems(data);
        setLoading(false);
      });
  }, []);
  return [taskitems, loading];
};

export default UseTask;

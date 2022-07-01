import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
const CompletedTask = () => {
  const [taskitems, setTaskItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://bagged-worms-62459.herokuapp.com/complete")
      .then((res) => res.json())
      .then((data) => {
        setTaskItems(data);
        setLoading(false);
      });
  }, []);
  const reverse = [...taskitems].reverse();

  return (
    <div class="card mx-auto w-11/12 md:w-3/12 mt-40 font-mono">
      {loading && (
        <div className="mt-32 ml-10">
          <Loading></Loading>
        </div>
      )}
      {reverse.map((item) => (
        <div key={item._id} className="card mb-10 shadow-xl">
          <div class="px-10 py-10 items-center">
            <p>
              <span className="text-green-600 text-xl">&#10004;</span>{" "}
              {item.complet}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTask;

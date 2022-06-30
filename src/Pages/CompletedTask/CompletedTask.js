import React, { useEffect, useState } from "react";

const CompletedTask = () => {
  const [taskitems, setTaskItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/complete")
      .then((res) => res.json())
      .then((data) => setTaskItems(data));
  }, []);
  const reverse = [...taskitems].reverse();
  return (
    <div class="card mx-auto w-3/12 mt-40 font-mono bg-base-100 shadow-xl">
      {reverse.map((item) => (
        <div key={item._id} class="card bg-base-100 shadow-xl">
          <div class="card-body grid grid-cols-1 items-center">
            <div>
              <p>
                <span className="text-green-600 text-xl">&#10004;</span> {item.complet}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTask;

import React from "react";
import { useNavigate } from "react-router-dom";
import UseTask from "../../Hooks/UseTask";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const Todo = () => {
  const [taskitems, loading] = UseTask();
  const reverse = [...taskitems].reverse();

  const handleCompelete = (task) => {
    const items = {
      complet: task,
    };
    fetch("https://bagged-worms-62459.herokuapp.com/complete", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Task Compelete");
      });
  };

  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div class="card mx-auto w-11/12 md:w-5/12 mt-40 font-mono bg-base-100">
      {loading && (
        <div className="mt-32 ml-10">
          <Loading></Loading>
        </div>
      )}
      {reverse.map((item) => (
        <div key={item._id} class="card bg-base-100 mb-10 shadow-xl">
          <div class="px-10 py-10 grid grid-cols-3 items-center">
            <div>
              <input
                onClick={() => handleCompelete(item.task)}
                type="checkbox"
                name="terms"
                id="terms"
              />
            </div>
            <div>
              <p>{item.task}</p>
            </div>
            <div class="card-actions justify-end">
              <button
                onClick={() => navigateToDetails(item._id)}
                class="btn hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 bg-pink-600 text-white ml-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;

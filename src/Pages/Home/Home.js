import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import UseTask from "../../Hooks/UseTask";

const Home = () => {
  const { register, handleSubmit, reset } = useForm();

  //   Post a Task =============
  const onSubmitFrom = (data) => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Your Task Succesfull Added");
      });
    reset();
  };
  // Get All Data =============

  const [taskitems, setTaskItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTaskItems(data));
  }, []);
  const reverse = [...taskitems].reverse();

  const handleCompelete = (task) => {
    const items = {
      complet: task,
    };
    fetch("http://localhost:5000/complete", {
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

//   Update Single Data 
  const handleUpdate = (task) => {

  }
  return (
    <div className="w-4/12 mx-auto my-40 mt-60 font-mono">
      <form
        onSubmit={handleSubmit(onSubmitFrom)}
        className="flex w-11/12 mx-auto"
      >
        <input
          className="w-80 rounded border-2 text-xl text-pink-600 border-pink-600 input input-bordered mb-5 py-4 pr-4"
          placeholder="Enter Your Task"
          type="text"
          {...register("task", { required: true })}
        />
        <input
          class="btn btn-outline bg-pink-600 text-white ml-2 rounded"
          type="Submit"
          value="Submit"
        />
      </form>
      {reverse.map((item) => (
        <div class="card mt-10 bg-base-100 shadow-xl">
          <div class="card-body grid grid-cols-3 items-center">
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
                onClick={() => handleUpdate()}
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

export default Home;

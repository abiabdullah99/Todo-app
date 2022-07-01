import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import UseTask from "../../Hooks/UseTask";

const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  //   Post a Task =============
  const onSubmitFrom = (data) => {
    fetch("https://bagged-worms-62459.herokuapp.com/tasks", {
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
  const [taskitems, loading] = UseTask();
  const reverse = [...taskitems].reverse();

  const [Mytask, setMyTask] = useState([]);

  const handleCompelete = (task, id) => {
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

    const url = `https://bagged-worms-62459.herokuapp.com/tasks/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const reamingData = Mytask.filter((product) => product._id !== id);
        setMyTask(reamingData);
      });
  };

  //   Update Single Data
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <div className="md:w-4/12 w-11/12 mx-auto my-40 mt-60 font-mono">
      <form
        onSubmit={handleSubmit(onSubmitFrom)}
        className="flex w-11/12 mx-auto"
      >
        <input
          className="w-10/12 rounded border-2 text-xl text-pink-600 border-pink-600 input input-bordered mb-5 py-4 pr-4"
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
      {loading && (
        <div className="mt-20 ml-10">
          <Loading></Loading>
        </div>
      )}
      {reverse.map((item) => (
        <div class="card mt-10 bg-base-100 shadow-xl">
          <div class="card-body grid grid-cols-3 items-center">
            <div>
              <input
                onClick={() => handleCompelete(item.task, item._id)}
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

export default Home;

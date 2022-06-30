import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import CompletedTask from "./Pages/CompletedTask/CompletedTask";
import Calendar from "./Pages/Calender/Calender";
import Todo from "./Pages/Todo/Todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
        <Route
          path="/Compelted"
          element={<CompletedTask></CompletedTask>}
        ></Route>
        <Route path="/Calendar" element={<Calendar></Calendar>}></Route>
        <Route path="/update/:id" element={<Calendar></Calendar>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default App;

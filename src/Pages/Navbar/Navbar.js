import React from "react";
import logo from "../../Assets/slack.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 bg-transparent mr-4 text-xl font-semibold p-0 px-5"
              : "text-black bg-transparent mr-4 text-xl font-semibold p-0 px-5"
          }
        >
          <h1>Home</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="todo"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 bg-transparent mr-4 text-xl font-semibold p-0 px-5"
              : "text-black bg-transparent mr-4 text-xl font-semibold p-0 px-5"
          }
        >
          <h1>Todo</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="Compelted"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 bg-transparent mr-4 text-xl font-semibold p-0 px-5"
              : "text-black bg-transparent mr-4 text-xl font-semibold p-0 px-5"
          }
        >
          <h1>Completed Task</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="Calendar"
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 bg-transparent mr-4 text-xl font-semibold p-0 px-5"
              : "text-black bg-transparent mr-4 text-xl font-semibold p-0 px-5"
          }
        >
          <h1>Calendar</h1>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div class="navbar md:px-40 px-20 font-mono">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-10" src={logo} alt="" />
            <h1 class="ml-4 normal-case text-3xl text-primary font-bold">
              Task App
            </h1>
          </div>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

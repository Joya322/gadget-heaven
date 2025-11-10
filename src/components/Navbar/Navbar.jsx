import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

import "./Navbar.css";
import Badge from "@mui/material/Badge";
import { UserContext } from "../ContextApi/ContextApi";


const Navbar = () => {
  const currentLocation = useLocation().pathname;

  const { cartList, wishList } = useContext(UserContext);

  // console.log(cartList.length);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : "",
          })}
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "rgba(149,56,226,1)" : "",
            color: isActive ? "white" : "",
          })}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "rgba(149,56,226,1)" : "",
            color: isActive ? "white" : "",
          })}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`${
        currentLocation === "/"
          ? "m-3 mt-0 mb-0 p-1 pb-0 bg-white border border-b-0 border-[#e5e5e5] rounded-t-[32px]"
          : ""
      }`}
    >
      <div
        className={`navbar ${
          currentLocation === "/"
            ? "bg-[rgba(149,56,226,1)] text-white rounded-t-[32px]"
            : "bg-white text-black"
        }`}
      >
        <div className="w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 gap-5"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl font-bold">
              Gadget Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium gap-5">
              {links}
            </ul>
          </div>
          <div className="navbar-end flex gap-3 pr-5">
            <Badge badgeContent={cartList.length} color="primary">
              <div className="bg-white text-black p-2 rounded-full border">
                <AiOutlineShoppingCart />
              </div>
            </Badge>

            {/* heart */}
            <Badge badgeContent={wishList.length} color="primary">
              <div className="bg-white text-black p-2 rounded-full border">
                <FaRegHeart />
              </div>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

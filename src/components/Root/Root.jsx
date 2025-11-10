import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContextApi from "../ContextApi/ContextApi";

const Root = ({ cartList, wishList }) => {
  return (
    <div className="bg-[rgba(247,247,247,1)]">
      <ContextApi>
        <Navbar cartList={cartList} wishLis={wishList} />
        <Outlet />
        <Footer />
        <ToastContainer />
      </ContextApi>
    </div>
  );
};

export default Root;

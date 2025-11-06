import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
      <div className="bg-[rgba(247,247,247,1)]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
};

export default Root;
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-white mt-8">
      <div>
        <h1 className="text-3xl font-bold text-[rgba(9,8,15)] text-center ">
          Gadget Heaven
        </h1>
        <p className="text-center text-[rgba(9,8,15,0.6)] py-5">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <p className="border-b-2 my-3"></p>
        <div className="flex justify-between w-11/12 mx-auto px-10 text-black">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">Services</h3>
            <a className="link link-hover opacity-60">Branding</a>
            <a className="link link-hover opacity-60">Design</a>
            <a className="link link-hover opacity-60">Marketing</a>
            <a className="link link-hover opacity-60">Advertisement</a>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <a className="link link-hover opacity-60">About us</a>
            <a className="link link-hover opacity-60">Contact</a>
            <a className="link link-hover opacity-60">Jobs</a>
            <a className="link link-hover opacity-60">Press kit</a>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">Legal</h3>
            <a className="link link-hover opacity-60">Terms of use</a>
            <a className="link link-hover opacity-60">Privacy policy</a>
            <a className="link link-hover opacity-60">Cookie policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

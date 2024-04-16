import React from "react";
import { useLocation } from "react-router-dom";
import alertSVG from "../icons/alert.svg";
import brandSVG from "../icons/brand.svg";
import cartSVG from "../icons/cart.svg";
import hamburgerSVG from "../icons/hamburgerMenu.svg";
import msgSVG from "../icons/msg.svg";
import searchSVG from "../icons/search.svg";
import userFilledSVG from "../icons/user-filled.svg";

function NavBar() {
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/log-in"
  ) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="px-16 p-12 flex justify-between flex-row">
        <div className="flex flex-row gap-2 items-center w-40 lg:w-96">
          <img src={brandSVG} alt="" />
          <h1 className="text-`xl flex-grow">eLibrary</h1>
        </div>
        <div className=" flex flex-grow justify-center items-center max-w-sm lg:max-w-lg">
          <div className="searchBar hidden md:flex flex-row mx-2 lg:mx-0 px-4 py-4 lg:w-96 rounded-xl gap-x-4 bg-customGrey items-center flex-grow ">
            <img src={searchSVG} alt="" />
            <input
              type="text"
              placeholder="Search titles..."
              className="text-gray-500 bg-transparent outline-none flex-grow md:hidden focus:text-primaryBlack text-primaryBlack"
            />
            <input
              type="text"
              placeholder="Search titles, authors..."
              className="text-gray-500 bg-transparent outline-none flex-grow hidden md:block lg:hidden focus:text-primaryBlack text-primaryBlack"
            />
            <input
              type="text"
              placeholder="Search book titles, authors, publishers..."
              className="text-gray-500 bg-transparent outline-none flex-grow hidden lg:block focus:text-primaryBlack text-primaryBlack"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse gap-x-8 w-40 lg:w-96 items-center text-xs">
          <div className="flex flex-row gap-x-2">
            <div className="flex flex-grow items-center pr-2">
              <img src={userFilledSVG} alt="" />
            </div>
            <div className="nameDiv flex flex-col hidden xl:block">
              <h1>Juan Dela Cruz</h1>
              <h1 className="text-gray-500">Student</h1>
            </div>
            <div className="p-2 items-start">
              <img src={hamburgerSVG} alt="" className="scale-150" />
            </div>
          </div>
          <div className="buttonsDiv flex flex-row gap-x-4">
            <img src={msgSVG} alt="" />
            <img src={alertSVG} alt="" />
            <img src={cartSVG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

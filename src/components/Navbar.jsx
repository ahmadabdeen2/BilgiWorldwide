import React, { useState } from "react";
import { logo } from "../assets";
import {
  MdMenu,
  MdClose,
  MdOutlineShoppingBag,
  MdOutlineLightbulb,
  MdDarkMode,
  MdLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarLeftLinks = [
  {
    id: 1,
    title: "Home",
    url: "",
  },
  {
    id: 2,
    title: "Vote",
    url: "vote",
  },

  
];

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between items-center pt-4 pb-4 sticky top-0">
        <div className='flex justify-center items-center'>
            {/* <h2 className="sm:text-lg text-sm font-bold text-gray-200 font-monument pr-5">Bilgi Worldwide</h2> */}
     <Link to={"/"}>
        <img
          src={logo}
          alt="logo"
          className="sm:w-20 sm:h-20 h-16 w-16 object-contain cursor-pointer"
        />
      </Link>
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className="sm:hidden flex justify-end items-center text-[25px] flex-1 ml-4 text-gray-200"
      >
        {toggle ? <MdClose /> : <MdMenu />}
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 pr-4">
        {NavbarLeftLinks.map((link, index) => {
          return (
            <li
              key={link.id}
              className={`font-poppins font-normal cursor-pointer text-[18px] pl-10 text-gray-200`}
            >
              <Link to={`/${link.url}`}> {link.title} </Link>
            </li>
          );
        })}
        <li className="font-poppins font-normal cursor-pointer text-[18px] pl-10 text-gray-200">
            <a href="https://linktr.ee/bilgiworldwide"> Linktree</a>
        </li>
      </ul>
     
    
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-background absolute top-24 right-0  my-1 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none bg-background sm:hidden flex flex-col justify-start items-center flex-1">
          {NavbarLeftLinks.map((link, index) => {
            return (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[15px] p-2 text-gray-200`}
              >
                <Link to={`/${link.url}`}> {link.title} </Link>
              </li>
            );
          })}
            <li

                className={`font-poppins font-normal cursor-pointer text-[15px] p-2 text-gray-200`}
              >
              <a href="https://linktr.ee/bilgiworldwide"> Linktree</a>
              </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";
import logo from '../assets/menu.png'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-[#1E1E1E] h-screen w-[10%] p-5 flex flex-col justify-between">
      
      <div className="flex h-14 justify-center items-center mt-1 mb-20">
        <img className="h-full" src={logo}/>
      </div>

      <div className="flex flex-col justify-center items-center h-auto mt-14">
      <Link to='/dashboard'>
          <img className="invert h-7 mb-16" src="https://cdn-icons-png.flaticon.com/512/1828/1828765.png"/>
        </Link>
        <Link to='history'>
          <img className="invert h-7 mb-16" src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png"/>
        </Link>
        <Link to='settings'>
          <img className="invert h-7" src="https://cdn-icons-png.flaticon.com/512/3524/3524636.png"/>
        </Link>
      </div>

      <div className="mt-auto flex justify-center items-center">
        <a href="/">
          <img className="invert h-7 mt-5 mb-5" src="https://cdn-icons-png.flaticon.com/512/126/126467.png"/>
        </a>
      </div>
    </div>
  );
};

export default Menu;

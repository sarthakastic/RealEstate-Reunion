import React, { useContext } from "react";
import logo from "../images/logo.svg";
import menu from "../images/menu.png"
import { Menu } from "../components/helper/Context"

const Navbar = () => {

  const {mobileView,setMobileView}= useContext(Menu)

  return (
    <div className={`w-full h-16 bg-[#F9F7FC] border-b-2 border-gray-200 ${mobileView?"hidden":"flex"} justify-between  `}>  
    {/* first div / icon */}
      <div className="h-full flex item-center pl-4">
        <div className="h-full flex items-center ">
          <img className="h-14 w-16" src={logo} alt="" />
        </div>
        <div className="h-full flex items-center pl-2  font-extrabold">
          <p className="text-lg font-serif text-gray-600">Estatery</p>
        </div>
      </div>
      {/* second div pages */}
      <div className="h-full md:flex hidden item-center gap-4 md:text-sm">
        <div className="h-full flex items-center pl-2  font-extrabold">
          <p className=" font-serif text-gray-600">Rent</p>
        </div>
        <div className="h-full flex  items-center pl-2  font-extrabold">
          <p className=" font-serif text-gray-600">Buy</p>
        </div>
        <div className="h-full flex items-center pl-2  font-extrabold">
          <p className=" font-serif text-gray-600">Sell</p>
        </div>
        <div className="h-full flex items-center pl-2  font-extrabold">
          <div className="h-[18px] flex items-center  font-serif text-gray-600 gap-1">
            <p>Manage Property</p> <p className=" rotate-180 -translate-y-1">^</p>
          </div>
        </div>
        <div className="h-full flex items-center pl-2  font-extrabold">
          <div className="h-[18px] flex items-center  font-serif text-gray-600 gap-1">
            <p>Resources</p> <p className=" rotate-180 -translate-y-1">^</p>
          </div>
        </div>
      </div>
      <div className="h-full flex item-center pr-4">
        
        <div className="h-full flex  items-center pl-2  text-[#7165E5]">
          <div className="p-2 border-2 md:flex hidden border-[#7165E5] rounded-md">
            <button >Log in</button>
          </div>
        </div>
        <div className="h-full flex  items-center pl-2  text-white ">
          <div className="p-2 md:flex hidden bg-[#7165E5] border-2 rounded-md">
            <button>Sign Up</button> 
          </div>
          <div className="p-2 md:hidden flex">
            <button onClick={()=>{setMobileView(true)}} ><img className="h-10 " src={menu} alt="" /></button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

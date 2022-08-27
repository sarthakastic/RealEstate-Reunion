import React, { useContext } from "react";
import Cards from "../components/card/Cards";
import Search from "../components/Search";
import { Menu } from "../components/helper/Context"


const Screen = () => {
  const {mobileView,setMobileView}= useContext(Menu)
  return (
    <div className={`w-full  min-h-screen ${mobileView?"hidden":"flex"} justify-center  bg-gray-100 overflow-hidden`}>
      <div className="md:w-[80%] w-[95%] ">
        
        <Search />
        
        <Cards />
      </div>
    </div>
  );
};

export default Screen;
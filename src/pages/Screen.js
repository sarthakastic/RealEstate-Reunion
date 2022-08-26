import React from "react";
import Cards from "../components/card/Cards";
import Search from "../components/Search";

const Screen = () => {
  return (
    <div className="w-full h-full flex justify-center  bg-gray-100 ">
      <div className="md:w-[80%] w-[95%] ">
        <Search />
        
        <Cards />
      </div>
    </div>
  );
};

export default Screen;

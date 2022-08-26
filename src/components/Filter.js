import React from "react";
import { useState, useEffect } from "react";
import fetchData from "../components/data/data.json"

const Filter = ({setCardData}) => {

    const [location,setLocation]= useState("");
    console.log(location);

    useEffect(()=>{
        setCardData(fetchData);
        if(location===""){
            setCardData(fetchData);
        }
        else{
            setCardData(
                fetchData.filter((element)=> element.location.address.city===location)
            )
        }
    },[location,fetchData] )

   

  

  return (
    <div className=" flex  justify-around items-center h-24 mb-8 bg-white">
      <div className="w-24">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-gray-400 ">Location</p>
          <div className="dropdown ">
            <label tabindex="0" className="text-[#7067E7]">
              Select
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-52 text-[#7067E7]"
            >
              <li>
                <a>Los Angeles</a>
              </li>
              <li>
                <a>Pacoima</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-24">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-gray-400 ">Location</p>
          <div className="dropdown ">
            <label tabindex="0" className="text-[#7067E7]">
              Select
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-52 text-[#7067E7]"
            >
              <li>
                <a>Los Angeles</a>
              </li>
              <li>
                <a>Pacoima</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-24">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-gray-400 ">Location</p>
          <div className="dropdown ">
            <label tabindex="0" className="text-[#7067E7]">
              Select
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-52 text-[#7067E7]"
            >
              <li>
                <button onClick={()=>setLocation("Los Angeles")}>Los Angeles</button>
              </li>
              <li>
                <a>Pacoima</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-24">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-gray-400 ">Stories</p>
          <div className="dropdown ">
            <label tabindex="0" className="text-[#7067E7]">
              Select
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-52 text-[#7067E7]"
            >
              <li>
                <a>1</a>
              </li>
              <li>
                <a>2</a>
              </li>
              <li>
                <a>3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

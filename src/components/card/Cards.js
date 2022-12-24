import React from "react";
import fetchData from "../data/data.json";
import heart from "../../images/heart.svg";
import { useState } from "react";
import Filter from "../Filter";

const Cards = () => {
  const [cardData, setCardData] = useState(fetchData);

  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between gap-4 justify-center items-center h-32">
        <div>
          <p className="font-bold md:text-[32px] text-[24px]">
            Search Properties to Rent
          </p>
        </div>
        <div>
          {" "}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-400 p-2"
            type="text"
            placeholder="Search for City || BHK"
          />
        </div>
      </div>

      <Filter setCardData={setCardData} cardData={cardData} />
      <div className=" flex w-full  flex-wrap justify-center  lg:justify-between gap-4 md:justify-center overflow-y-hidden ">
        {cardData
          .filter((value) => {
            if (search === "") {
              return value;
            } else {
              return (
                value.location.address.city
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                value.description.beds.toString().includes(search)
              );
            }
          })
          .map((data, id) => (
            <div
              className="h-[430px] w-[350px]  bg-gray-200 rounded-xl"
              key={id}
            >
              <div className="">
                <img
                  className="w-full h-44 bg-contain rounded-t-xl"
                  src={data.primary_photo.href}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between h-1/2">
                <div className="flex justify-between items-center px-2">
                  <div>
                    <p className="text-[#7067E7] font-semibold">
                      ₹{data.list_price}/month
                    </p>
                  </div>
                  <div className=" flex w-14 h-14 items-center justify-center">
                    <button className="border p-2 rounded-full bg-white">
                      <img className="h-6 w-6" src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-lg font-bold">{data.description.name}</p>
                  <p>
                    {data.location.address.line},{" "}
                    <span className="font-semibold">
                      {data.location.address.city}, California
                    </span>
                  </p>
                </div>

                <div className="flex p-2 gap-2 flex-col">
                  <div className="border-b-2 border-gray-400" />
                  <div className="flex flex-row justify-around">
                    {" "}
                    <p>{data.description.beds} BHK</p>
                    <p> {data.description.baths} Bathrooms </p>
                    <p> {data.description.sqft} sqft </p>
                    <p> {data.description.stories} stories </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cards;

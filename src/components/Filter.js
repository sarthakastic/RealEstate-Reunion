import React from "react";
import { useState, useEffect } from "react";
import fetchData from "../components/data/data.json";

const Filter = ({ setCardData }) => {
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (price === "") {
      setCardData(fetchData);
    } else if (price === "Low to high") {
      const sortData = [...fetchData].sort((a, b) =>
        a.list_price < b.list_price ? -1 : 1
      );

      setCardData(sortData);
    } else if (price === "High to low") {
      const sortData = [...fetchData].sort((a, b) =>
        a.list_price > b.list_price ? -1 : 1
      );

      setCardData(sortData);
    }
  }, [price, fetchData]);

  const [bhk, setBhk] = useState("");

  useEffect(() => {
    setCardData(fetchData);
    if (bhk === "") {
      setCardData(fetchData);
    } else {
      setCardData(
        fetchData.filter((element) => element.description.beds == bhk)
      );
    }
  }, [bhk, fetchData]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    setCardData(fetchData);
    if (location === "") {
      setCardData(fetchData);
    } else {
      setCardData(
        fetchData.filter(
          (element) => element.location.address.city === location
        )
      );
    }
  }, [location, fetchData]);

  const [stories, setStories] = useState("");

  useEffect(() => {
    setCardData(fetchData);
    if (stories === "") {
      setCardData(fetchData);
    } else {
      setCardData(
        fetchData.filter((element) => element.description.stories == stories)
      );
    }
  }, [stories, fetchData]);

  console.log(location);
  console.log(bhk);
  console.log(stories);

  return (
    <div className=" flex justify-around items-center md:h-24 mb-8 bg-white flex-wrap flex-col gap-4 p-8">
      <div className="w-24">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-gray-400">Price</p>
          <div className="dropdown ">
            <label tabIndex="0" className="text-[#7067E7]">
              {price === "" ? "Select" : price}
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu shadow bg-gray-100 rounded-box w-44 text-[#7067E7]"
            >
              <li>
                <button onClick={() => setPrice("")}>Remove Filter</button>
              </li>
              <li>
                <button onClick={() => setPrice("Low to high")}>
                  Low to High
                </button>
              </li>
              <li>
                <button onClick={() => setPrice("High to low")}>
                  High to Low
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-24">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-gray-400 ">BHK</p>
          <div className="dropdown ">
            <label tabIndex="0" className="text-[#7067E7]">
              {bhk === "" ? "Select" : bhk}
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-44 text-[#7067E7]"
            >
              <li>
                <button onClick={() => setBhk("")}>Remove Filter</button>
              </li>
              <li>
                <button onClick={() => setBhk("1")}>1</button>
              </li>
              <li>
                <button onClick={() => setBhk("2")}>2</button>
              </li>
              <li>
                <button onClick={() => setBhk("3")}>3</button>
              </li>
              <li>
                <button onClick={() => setBhk("4")}>4</button>
              </li>
              <li>
                <button onClick={() => setBhk("5")}>5</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-24">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-gray-400 ">Location</p>
          <div className="dropdown">
            <label tabIndex="0" className="text-[#7067E7]">
              {location === "" ? "Select" : location}
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-44 text-[#7067E7]"
            >
              <li>
                <button onClick={() => setLocation("")}>Remove Filter</button>
              </li>
              <li>
                <button onClick={() => setLocation("Los Angeles")}>
                  Los Angeles
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("Pacoima")}>Pacoima</button>
              </li>
              <li>
                <button onClick={() => setLocation("Sherman Oaks")}>
                  Sherman Oaks
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("Panorama City")}>
                  Panorama City
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("North Hollywood")}>
                  North Hollywood
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("Reseda")}>Reseda</button>
              </li>
              <li>
                <button onClick={() => setLocation("West Hills")}>
                  West Hills
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("Lake Balboa")}>
                  Lake Balboa
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-24">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-gray-400 ">Stories</p>
          <div className="dropdown ">
            <label tabIndex="0" className="text-[#7067E7]">
              {stories === "" ? "Select" : stories}
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-44 text-[#7067E7]"
            >
              <li>
                <button onClick={() => setStories("")}>Remove Filter</button>
              </li>
              <li>
                <button onClick={() => setStories("1")}>1</button>
              </li>
              <li>
                <button onClick={() => setStories("2")}>2</button>
              </li>
              <li>
                <button onClick={() => setStories("3")}>3</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

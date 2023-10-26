import React from "react";
import Timdate from "./first section/Timdate";
import Location from "./first section/Location";
import Search from "./first section/Search";
const FirstSection = ({ searchData }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 md:items-start pt-24  text-white px-2 sm:px-5">
      <Timdate />
      <Location />
      <Search searchData2={searchData} />
    </div>
  );
};

export default FirstSection;

import React from "react";
import SunRiseSet from "./third section/SunRiseSet";
import MaxAvgMinTemp from "./third section/MaxAvgMinTemp";
import CurWeather from "./third section/CurWeather";

const ThirdSection = () => {
  return (
    <div className="px-2 sm:px-5">
      <h3 className="font-bold text-2xl mt-8">Today weather condition</h3>
      <div className="mt-2 flex flex-wrap gap-3 ">
        <SunRiseSet />
        <MaxAvgMinTemp />
        <CurWeather />
      </div>
    </div>
  );
};

export default ThirdSection;

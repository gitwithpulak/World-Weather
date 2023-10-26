import React, { useState } from "react";
import HourlyForcast from "./fourth section/HourlyForcast";
import Day2 from "./fourth section/Day2";
import Day3 from "./fourth section/Day3";
import { useAtom } from "jotai";
import { globState } from "../State/atom";

const FourthSection = () => {
  const glodata = useAtom(globState);
  const [day2, setDay2] = useState(["hidden", "Show"]);
  const [day3, setDay3] = useState(["hidden", "Show"]);
  return (
    <div className="px-2 sm:px-5">
      <h3 className="font-bold text-2xl mt-8">Today hourly weather forcast</h3>
      <HourlyForcast apiData2={glodata[0]} />
      <h3 className="font-bold text-2xl mt-8">
        {!glodata[0] ? "000" : glodata[0].forecast.forecastday[1].date} hourly
        weather forcast{" "}
        <button
          onClick={() => {
            day2[0] === "hidden"
              ? setDay2(["block", "Hide"])
              : setDay2(["hidden", "Show"]);
          }}
          className="ml-2 px-2 rounded-sm text-base font-normal bg-orange-500"
        >
          {day2[1]}
        </button>
        {/* day2 button */}
      </h3>
      <div className={day2[0]}>
        <Day2 apiData2={glodata[0]} />
      </div>
      <h3 className="font-bold text-2xl mt-8">
        {!glodata[0] ? "000" : glodata[0].forecast.forecastday[2].date} hourly
        weather forcast{" "}
        <button
          onClick={() => {
            day3[0] === "hidden"
              ? setDay3(["block", "Hide"])
              : setDay3(["hidden", "Show"]);
          }}
          className="ml-2 px-2 rounded-sm text-base font-normal bg-orange-500"
        >
          {day3[1]}
        </button>
      </h3>
      <div className={day3[0]}>
        <Day3 apiData2={glodata[0]} />
      </div>
    </div>
  );
};

export default FourthSection;

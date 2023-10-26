import { useAtom } from "jotai";
import React, { memo } from "react";
import { nightState } from "../../State/atom";

const Day3 = ({ apiData2 }) => {
  const nightdata = useAtom(nightState);
  return (
    <div className="mt-2 flex flex-wrap  ">
      {!apiData2
        ? "000"
        : apiData2.forecast.forecastday[1].hour.map((elem, i) => {
            return (
              <div
                key={i}
                className={`${
                  nightdata[0] ? "bg-[#0e163a]" : "bg-[#e3e7fc]"
                } rounded-xl m-1 p-1 w-20 sm:w-28 flex flex-col items-center text-center`}
              >
                <p className="text-xl font-bold text-center">
                  {!apiData2 ? "000" : elem.time.slice(-5)}
                </p>
                <img
                  src={!apiData2 ? "000" : elem.condition.icon}
                  alt="weather"
                />

                <p className="font-medium text-lg">
                  {!apiData2 ? "000" : elem.temp_c} &#8451;
                </p>
              </div>
            );
          })}
    </div>
  );
};

export default memo(Day3);

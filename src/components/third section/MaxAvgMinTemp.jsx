import { useAtom } from "jotai";
import React, { memo } from "react";
import { globState, nightState } from "../../State/atom";

const MaxAvgMinTemp = () => {
  const nightdata = useAtom(nightState);
  const glodata = useAtom(globState);
  return (
    <div
      className={`flex flex-col gap-3 ${
        nightdata[0] ? "bg-[#0e163a]" : "bg-[#e3e7fc]"
      } p-3 rounded-xl  text-center w-60`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base ">Max Temp</h3>
        <p className="text-2xl font-bold bg-orange-600 rounded-md px-2">
          {!glodata[0]
            ? "000"
            : Math.round(glodata[0].forecast.forecastday[0].day.maxtemp_c)}{" "}
          &#8451;
        </p>
      </div>
      <div className="flex  items-center justify-between">
        <h3 className="font-semibold text-base">Avg Temp</h3>
        <p className="text-2xl font-bold bg-yellow-500 text-black rounded-md px-2">
          {!glodata[0]
            ? "000"
            : Math.round(glodata[0].forecast.forecastday[0].day.avgtemp_c)}{" "}
          &#8451;
        </p>
      </div>
      <div className="flex  items-center justify-between">
        <h3 className="font-semibold text-base">Min Temp</h3>
        <p className="text-2xl font-bold bg-green-500 rounded-md px-2">
          {!glodata[0]
            ? "000"
            : Math.round(glodata[0].forecast.forecastday[0].day.mintemp_c)}{" "}
          &#8451;
        </p>
      </div>
    </div>
  );
};

export default memo(MaxAvgMinTemp);

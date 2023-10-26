import { useAtom } from "jotai";
import React, { memo } from "react";
import { globState, nightState } from "../../State/atom";

const SunRiseSet = () => {
  const nightdata = useAtom(nightState);
  const glodata = useAtom(globState);
  return (
    <div
      className={`flex flex-col justify-between ${
        nightdata[0] ? "bg-[#0e163a]" : "bg-[#e3e7fc]"
      } p-4 rounded-xl gap-4 w-60`}
    >
      <div
        className={`flex gap-1 items-center ${
          nightdata[0] ? "text-blue-200" : "text-black"
        }`}
      >
        <img src="media/sunrise.png" alt="" />
        <div className="">
          <h3 className="font-medium text-sm">Sunrise</h3>
          <p className="font-semibold text-xl text-blue-600">
            {!glodata[0]
              ? "000"
              : glodata[0].forecast.forecastday[0].astro.sunrise}
          </p>
        </div>
      </div>
      <div
        className={`flex gap-1 items-center ${
          nightdata[0] ? "text-blue-200" : "text-black"
        }`}
      >
        <img src="media/sunset.png" alt="" />
        <div className="">
          <h3 className="font-medium text-sm">Sunset</h3>
          <p className="font-semibold text-xl text-blue-600">
            {!glodata[0]
              ? "000"
              : glodata[0].forecast.forecastday[0].astro.sunset}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(SunRiseSet);

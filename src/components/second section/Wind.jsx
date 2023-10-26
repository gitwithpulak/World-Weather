import { useAtom } from "jotai";
import React, { memo } from "react";
import { globState } from "../../State/atom";

const Wind = () => {
  const glodata = useAtom(globState);
  return (
    <div
      className="w-full md:w-[25rem] flex flex-col justify-between rounded-xl shadow p-4 text-black"
      style={{
        backgroundImage: `url(media/wind.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="p-2 bg-orange-100 rounded-full w-10">
          <img src="media/wind_direction.png" alt="" />
        </span>
        <h2 className="text-lg font-semibold">Wind Direction</h2>
      </div>

      {/* wind direction */}
      <div className="my-3 sm:my-10 flex items-center gap-4">
        <h3 className="text-4xl font-semibold">
          {!glodata[0] ? "000" : glodata[0].current.wind_dir}
        </h3>
        <span className="">
          <img src="media/wind_rose.png" alt="" />
        </span>
      </div>
      <div className="flex flex-wrap gap-1 justify-start">
        <div className="bg-black w-24 rounded-2xl text-white py-1">
          <h3 className="text-center text-base font-semibold">wind km/h</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0] ? "000" : glodata[0].current.wind_kph}
          </p>
        </div>
        <div className="bg-orange-500 w-24 rounded-2xl text-white py-1">
          <h3 className="text-center text-base font-semibold">wind mi/h</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0] ? "000" : glodata[0].current.wind_mph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Wind);

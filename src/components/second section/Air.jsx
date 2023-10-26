import { useAtom } from "jotai";
import React, { memo } from "react";
import { globState } from "../../State/atom";

const Air = () => {
  const glodata = useAtom(globState);
  return (
    <div
      className="w-full md:w-[30rem] flex flex-col justify-between rounded-xl shadow p-4 text-black"
      style={{
        backgroundImage: `url(media/air.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="p-2 bg-orange-100 rounded-full w-10">
          <img src="media/air_logo.png" alt="" />
        </span>
        <h2 className="text-lg font-semibold ">Air Quality</h2>
      </div>

      {/* AQI */}
      <div className="my-3 sm:my-10 flex items-center gap-4">
        <h3 className="text-4xl font-semibold">
          {!glodata[0]
            ? "000"
            : Math.round(glodata[0].current.air_quality.pm10)}
        </h3>
        <span className="text-md font-semibold bg-lime-500 px-2 rounded-lg">
          AQI
        </span>
      </div>
      {/* box start here-------------------  */}
      <div className="flex flex-wrap gap-1 justify-start">
        <div className="bg-black w-24 rounded-2xl text-white py-1">
          <h3 className="text-center text-base font-semibold">CO</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0]
              ? "000"
              : Math.round(glodata[0].current.air_quality.co)}
          </p>
        </div>
        <div className="bg-orange-500 w-24 rounded-2xl text-white py-1">
          <h3 className="text-center text-base font-semibold">NO2</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0]
              ? "000"
              : Math.round(glodata[0].current.air_quality.no2)}
          </p>
        </div>
        <div className="bg-white w-24 rounded-2xl  py-1">
          <h3 className="text-center text-base font-semibold">O3</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0]
              ? "000"
              : Math.round(glodata[0].current.air_quality.o3)}
          </p>
        </div>
        <div className="bg-yellow-400 w-24 rounded-2xl py-1">
          <h3 className="text-center text-base font-semibold">SO2</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0]
              ? "000"
              : Math.round(glodata[0].current.air_quality.so2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Air);

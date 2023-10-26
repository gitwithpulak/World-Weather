import { useAtom } from "jotai";
import React, { memo } from "react";
import { globState } from "../../State/atom";

const Temprature = () => {
  const glodata = useAtom(globState);
  return (
    <div
      className="w-full md:w-[30rem] flex flex-col justify-between rounded-xl shadow p-4 text-black"
      style={{
        backgroundImage: `url(media/temp.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="p-2 bg-orange-100 rounded-full w-10">
          <img src="media/weather_logo.png" alt="" />
        </span>
        <h2 className="text-lg font-semibold">Weather</h2>
      </div>
      {/* temp container */}
      {/* weather condition celcicus */}
      <div className="my-3 sm:my-10 flex gap-4 items-center">
        <h3 className="text-4xl font-semibold">
          {!glodata[0] ? "000" : glodata[0].current.temp_c} &#8451;
        </h3>
        <p className="text-md font-semibold bg-lime-500 px-2 rounded-lg">
          {!glodata[0] ? "000" : glodata[0].current.condition.text}
        </p>
      </div>
      {/* box start here-------------------  */}
      <div className="flex flex-wrap gap-1 justify-start ">
        {/* cloud */}
        <div className="bg-black w-24 rounded-2xl text-white py-1">
          <h3 className="text-center text-base font-semibold">Cloud</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0] ? "000" : glodata[0].current.cloud}
          </p>
        </div>
        {/* humidity */}
        <div className="bg-orange-500 w-24 rounded-2xl text-white py-1">
          <h3 className="text-center text-base font-semibold">Humidity</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0] ? "000" : glodata[0].current.humidity}
          </p>
        </div>
        {/* pressure */}
        <div className="bg-white w-28 rounded-2xl py-1">
          <h3 className="text-center text-base font-semibold">Pressure</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0] ? "000" : glodata[0].current.pressure_mb}
            <span className="text-base">mb</span>
          </p>
        </div>

        {/* uv */}
        <div className="bg-yellow-400 w-20 rounded-2xl py-1">
          <h3 className="text-center text-base font-semibold">UV</h3>
          <p className="text-2xl font-bold text-center">
            {!glodata[0] ? "000" : glodata[0].current.uv}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Temprature);

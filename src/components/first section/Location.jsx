import { useAtom } from "jotai";
import React, { memo } from "react";
import { MdLocationPin } from "react-icons/md";
import { globState, nightState } from "../../State/atom";
const Location = () => {
  const nightdata = useAtom(nightState);
  const glodata = useAtom(globState);
  return (
    <div
      className={`text-5xl md:text-4xl font-semibold ${
        nightdata[0] ? "text-white" : "text-black"
      } flex flex-col items-center`}
    >
      <h2>{!glodata[0] ? "000" : glodata[0].location.name}</h2>
      <div className="flex items-center justify-center md:justify-start text-3xl md:text-xl">
        <MdLocationPin />
        {!glodata[0] ? "000" : glodata[0].location.region},
        {!glodata[0] ? "000" : glodata[0].location.country}
      </div>
    </div>
  );
};

export default memo(Location);

import React from "react";
import Temprature from "./second section/Temprature";
import Air from "./second section/Air";
import Wind from "./second section/Wind";
import Timeformat from "./second section/Timeformat";

const SecondSection = () => {
  return (
    <div className="px-2 sm:px-5">
      <Timeformat />
      <div className="flex flex-col md:flex-row gap-5 justify-between mt-2">
        <Temprature />
        <Air />
        <Wind />
      </div>
    </div>
  );
};

export default SecondSection;

import { useAtom } from "jotai";
import React, { memo } from "react";
import { globState, nightState } from "../../State/atom";

const CurWeather = () => {
  const nightdata = useAtom(nightState);
  const glodata = useAtom(globState);

  return (
    <div className="flex gap-3">
      {/* recent weather */}
      <div
        className={`${
          nightdata[0] ? "bg-[#0e163a]" : "bg-[#e3e7fc]"
        } rounded-xl p-3`}
      >
        <div className="flex flex-col items-center">
          <img
            src={
              !glodata[0]
                ? "000"
                : glodata[0].forecast.forecastday[0].day.condition.icon
            }
            alt=""
            width={"100rem"}
          />
          <p>
            {!glodata[0]
              ? "000"
              : glodata[0].forecast.forecastday[0].day.condition.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(CurWeather);

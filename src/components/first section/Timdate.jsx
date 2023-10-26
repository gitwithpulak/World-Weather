import { useAtom } from "jotai";
import React, { memo, useState } from "react";
import { nightState } from "../../State/atom";
const Timdate = () => {
  const [timDate, setTimDate] = useState({
    time: {
      hour: new Date().getHours(),
      min: new Date().getMinutes(),
    },
    date: new Date().toDateString(),
  });
  const DateTime = () => {
    setTimDate({
      time: {
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
      },
      date: new Date().toDateString(),
    });
  };
  setInterval(DateTime, 1000);
  const nightdata = useAtom(nightState);
  return (
    <>
      <div>
        <p
          className={`text-4xl sm:text-5xl font-semibold pb-0 sm:pb-2 ${
            nightdata[0] ? "text-white" : "text-black"
          }`}
        >
          {timDate.time.hour < 10 ? "0" + timDate.time.hour : timDate.time.hour}
          :{timDate.time.min < 10 ? "0" + timDate.time.min : timDate.time.min}{" "}
          {timDate.time.hour > 12 ? "PM" : "AM"}
        </p>
        <p
          className={`text-lg font-medium ${
            nightdata[0] ? "text-white" : "text-black"
          } text-center sm:text-left`}
        >
          {timDate.date}
        </p>
      </div>
    </>
  );
};

export default memo(Timdate);

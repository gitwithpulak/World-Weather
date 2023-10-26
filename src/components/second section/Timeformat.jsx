import { useAtom } from "jotai";
import { memo, useState } from "react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { nightState } from "../../State/atom";

const Timeformat = () => {
  const nightdata = useAtom(nightState);
  const [timezone, setTimezone] = useState({ hour: new Date().getHours() });
  const [timrange, setTimrange] = useState("");
  setInterval(() => {
    setTimezone({ hour: new Date().getHours() });
    if (timezone.hour > 1 && timezone.hour < 6) {
      setTimrange("Good night");
    } else if (timezone.hour > 6 && timezone.hour < 12) {
      setTimrange("Good morning");
    } else if (timezone.hour > 12 && timezone.hour < 18) {
      setTimrange("Good afternoon");
    } else {
      setTimrange("Good evening");
    }
  }, 1000);
  return (
    <div className="flex items-center justify-center md:justify-start mx-auto md:mx-0 py-5 gap-2 text-2xl font-semibold mt-8">
      <span
        className={`text-3xl ${nightdata[0] ? "text-white" : "text-black"}`}
      >
        {timezone.hour > 12 ? (
          <RiMoonFill className="" />
        ) : (
          <RiSunFill className="" />
        )}
      </span>
      <h4 className="text-center md:text-left">{timrange}</h4>
    </div>
  );
};

export default memo(Timeformat);

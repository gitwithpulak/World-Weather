import { useAtom } from "jotai";
import React from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { nightState } from "../State/atom";

const Navbar = () => {
  const [night, setNight] = useAtom(nightState);
  const changemode = () => {
    night !== true ? setNight(true) : setNight(false);
  };

  return (
    <header
      className={`${
        night ? "bg-[#0e163a]" : "bg-[#e3e7fc]"
      } sm:px-5 px-2 py-2 h-16 fixed w-full top-0 flex justify-between align-middle`}
    >
      <a href="/" className="flex items-center gap-2 ">
        <img src="media/weather.png" alt="" className="w-12" />
        <h1
          className={`${
            night ? "text-white" : "text-black"
          } font-semibold text-xl sm:text-2xl my-auto `}
        >
          World Weather
        </h1>
      </a>
      <nav className="flex items-center gap-8">
        <div
          onClick={changemode}
          className={`w-14 h-6 p-1 ${
            night ? "bg-blue-800" : "bg-blue-200"
          } rounded-xl cursor-pointer`}
        >
          <div className={`w-5 ${night ? "ml-7" : "ml-0"}`}>
            <img
              src="media/sun.png"
              alt=""
              className={`w-4 ${night ? "hidden" : "block"}`}
            />
            <img
              src="media/moon.png"
              alt=""
              className={`w-4 ${night ? "block" : "hidden"}`}
            />
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            alert(
              "This is a weather app, which show you all over world weather condition. This website make for educational purpose. This weather app make using React js, Tailwind css, Jotai (global state management) and etc. "
            );
          }}
        >
          <FaInfoCircle
            className={`text-xl ${night ? "text-white" : "text-black"}`}
          />
        </div>
      </nav>
      <span className="hidden">
        <RiMenu3Fill style={{ color: "#FFFFFF" }} />
        <RiCloseFill style={{ color: "#FFFFFF" }} />
      </span>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import { useAtom } from "jotai";
import { globState, nightState } from "./State/atom";

function App() {
  const [weather, setWeather] = useAtom(globState);
  const [search, setSearch] = useState("New Delhi");
  const nightdata = useAtom(nightState);
  const sendweatherdata = (data) => {
    setWeather(data);
  };

  useEffect(() => {
    const func = async () => {
      try {
        const data = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=da2103b2c4ce4f95af051626232503&q=${search}&days=7&aqi=yes&alerts=no`
        );
        const apidata = await data.json();
        if (apidata.error) {
          alert("Your search location doesn't exit. Check your location name");
        } else {
          sendweatherdata(apidata);
        }
      } catch (error) {
        console.log("some problem is found" + error);
      }
    };
    func();
  }, [search]);

  // console.log(globState);

  return (
    <div
      className={`${nightdata[0] ? "bg-[#19245e]" : "bg-[#ffffff]"} ${
        nightdata[0] ? "text-white" : "text-black"
      } `}
    >
      <Navbar />
      <FirstSection searchData={setSearch} />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <p
        className={`text-center ${
          nightdata[0] ? "bg-blue-900" : "bg-[#e3e7fc]"
        } mt-4`}
      >
        This website &copy; copyright reserved by{" "}
        <a href="/" className="text-orange-600">
          Technology with pulak
        </a>
      </p>
    </div>
  );
}

export default App;

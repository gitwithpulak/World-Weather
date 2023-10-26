import { useAtom } from "jotai";
import React, { memo, useRef } from "react";
import { nightState } from "../../State/atom";

const Search = (props) => {
  const searchdatavalue = useRef();
  const nightdata = useAtom(nightState);
  return (
    <div
      className={`flex items-center text-md gap-2 px-3 py-1 ${
        nightdata[0] ? "bg-[#1f2d72]" : "bg-[#e3e7fc]"
      }  rounded-xl`}
    >
      <input
        type="text"
        id=""
        ref={searchdatavalue}
        onChange={(e) => {
          searchdatavalue.current = e.target.value;
        }}
        placeholder="Search Your Location "
        className={`outline-none ${
          nightdata[0] ? "text-white" : "text-black"
        }   px-2 py-1 bg-transparent`}
      />
      <button
        onClick={() => {
          props.searchData2(searchdatavalue.current);
        }}
        className="w-6"
      >
        <img src="media/search.png" style={{ width: "18px" }} alt="" />
      </button>
    </div>
  );
};

export default memo(Search);

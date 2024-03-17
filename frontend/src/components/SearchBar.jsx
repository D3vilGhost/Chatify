import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex w-fit p-[3%]">
      <input
        className="placeholder:italic  bg-transparent text-sm placeholder:text-gray-900 w-20 focus:outline-none"
        type="text"
        placeholder="Search User"
      />
      <div className="w-fit hover:text-white  hover:scale-125 p-[3%]">
      <IoSearchSharp className="text-2xl" />
    </div>
    <br />
    </div>
  );
}

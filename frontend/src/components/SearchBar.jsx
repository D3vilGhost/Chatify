import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex justify-center md:justify-normal md:w-fit p-[3%]">
      <input
        className="placeholder:italic basis-2/3 col-span-1 bg-transparent text-sm placeholder:text-gray-900 w-20 focus:outline-none"
        type="text"
        placeholder="Search User"
      />
      <div className="w-fit hover:text-white basis-hover:scale-125 p-[3%]">
        <IoSearchSharp className="text-2xl " />
      </div>
    </div>
  );
}

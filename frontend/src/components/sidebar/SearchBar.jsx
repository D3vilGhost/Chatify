import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex flex-row gap-2">
      <input
        className="placeholder:italic flex w-full rounded-md border-2 text-white border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
        type="text"
        placeholder="Search"
      ></input>
      <div className="flex content-center border-2 rounded-md border-gray-700 hover:border-white hover:scale-110 p-1">
      <IoSearchSharp className="text-4xl"/>
      </div>
    </div>
  );
}

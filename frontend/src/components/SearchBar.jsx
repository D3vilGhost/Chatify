import { IoSearchSharp } from "react-icons/io5";
import useSearch from "../hooks/useSearch.js";
import Spinner from "./Spinner.jsx";
import toast from "react-hot-toast";
import { useState } from "react";

export default function SearchBar() {
  const [ searchInput, setSearchInput ]= useState("");
  const { loading, search } = useSearch();

  const handleSearch = async (e) => {

    e.preventDefault();

    if (searchInput == "") {
      toast.error("Type An Username To Search");
      return;
    }
    await search(searchInput);
    setSearchInput("");
  };

  return (
    <div className="flex justify-center md:justify-normal md:w-fit p-[3%]">
      <input
        className="placeholder:italic basis-2/3 col-span-1 bg-transparent text-sm placeholder:text-gray-900 w-20 focus:outline-none"
        type="text"
        placeholder="Search User"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <div className="w-fit hover:text-white basis-hover:scale-125 p-[3%]">
        {loading ? (
          <Spinner />
        ) : (
          <IoSearchSharp className="text-2xl" onClick={handleSearch} />
        )}
      </div>
    </div>
  );
}

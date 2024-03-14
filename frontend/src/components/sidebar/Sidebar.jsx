import React from "react";
import SearchBar from "./SearchBar";
import Contacts from "./Contacts";

export default function Sidebar() {
  return (
    <div className="border-4 border-white rounded-lg w-1/3 h-96 align-middle p-4 overflow-auto">
      <SearchBar/>
      <br />
      <Contacts />
    </div>
  );
}

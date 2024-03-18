import React from "react";
import LogOutButton from "./LogOutButton.jsx";
import SearchBar from "./SearchBar.jsx";
export default function DesktopHeader() {
  return (
    <div className="grid grid-cols-3 self-center ">
      <div className="justify-self-start w-[50%] self-center">
        <SearchBar />
      </div>
      <div className="justify-self-center text-2xl font-extrabold self-center">
        CHATIFY
      </div>
      <div className="justify-self-end self-center">
        <LogOutButton />
      </div>
    </div>
  );
}

import { createContext, useContext, useState } from "react";

export const FriendListContext = createContext();

export const useFriendListContext = () => {
	return useContext(FriendListContext);
};

export const FriendListContextProvider = ({ children }) => {
    const [friendList,setFriendList]=useState([]);

	return <FriendListContext.Provider value={{friendList,setFriendList}}>{children}</FriendListContext.Provider>;
};
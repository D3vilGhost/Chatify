import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const useSearchContext = () => {
	return useContext(SearchContext);
};

export const SearchContextProvider = ({ children }) => {
	const [searchResult,setSearchResult]=useState([]);

	return <SearchContext.Provider value={{searchResult,setSearchResult}}>{children}</SearchContext.Provider>;
};
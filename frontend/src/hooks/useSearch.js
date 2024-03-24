import { useState } from "react";
import toast from "react-hot-toast";
import {useSearchContext} from "../context/SearchContext.jsx";

export default function useSearch() {
  const [loading, setLoading] = useState(false);
  const {setSearchResult } = useSearchContext();

  const search = async (searchInput) => {
    setLoading(true);
    try {

      const res = await fetch(`/api/search/${searchInput}`);
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      if(data.length==0){
        throw new Error("No Such User Exist!");
      }
      setSearchResult(data);

    } catch (error) {

      toast.error(error.message);

    } finally {

      setLoading(false);
    }
  };
  return { loading, search };
}


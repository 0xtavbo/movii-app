import { useState } from "react";
import axios from "axios";

const useAxiosSearch = () => {
  const [pageNumber, setPageNumber] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const searchMovie = (page, keyword) => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=41b1193a31de706dbf8d3e652263a058&page=${page}&language=en-US&query=${keyword}`;
    axios
      .get(endPoint)
      .then((res) => {
        //setPageNumber(res.data.page);
        setSearchResults(res.data.results);
        setPageNumber(page);
      })
      .catch((error) => {
        setError("API call error, no query keyword for search");
      })
      .finally(() => setIsLoading(false));

    return [error, pageNumber, searchResults, isLoading];
  };

  return { searchMovie };
};

export default useAxiosSearch;

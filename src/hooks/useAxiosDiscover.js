import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosDiscover = (page) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(page);
  }, []);

  const fetchData = (page) => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=41b1193a31de706dbf8d3e652263a058&language=en-US&page=${page}`;
    axios
      .get(endPoint)
      .then((res) => {
        setPageNumber(res.data.page);
        setResults(res.data.results);
      })
      .catch((error) => {
        setError("API call network error");
      })
      .finally(() => setIsLoading(false));
  };

  const refetchData = (page) => {
    fetchData(page);
  };

  return { error, pageNumber, results, isLoading, refetchData };
};

export default useAxiosDiscover;

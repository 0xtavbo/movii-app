import React, {useState, useRef, useEffect} from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ListContainer } from '../List/ListStyles';
import MovieCard from '../Card/MovieCard';
import useAxiosSearch from '../../hooks/useAxiosSearch';
import { useIntersectionObserver } from '@react-hooks-library/core';
import { v4 as uuidv4 } from 'uuid';

const Results = () => {
  const [searchParams, ] = useSearchParams();

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [refetchPage, setRefetchPage] = useState(2);

  const keyword = searchParams.get('keyword');
  const { searchMovie } = useAxiosSearch();

  const observed = useRef();
  const { inView } = useIntersectionObserver(observed);

  useEffect(() => {
    if (inView) {
      const [error, pageNumber, searchResults, loading] = searchMovie(refetchPage, keyword);
      if (searchResults) {
        setResults([...results, ...searchResults]);
        setRefetchPage(refetchPage + 1);
      }
    }
  }, [inView])

  useEffect(() => {
    const [error, pageNumber, searchResults, loading] = searchMovie(1, keyword);

    if (searchResults) {
      setResults(searchResults);
      setIsLoading(loading);
      setCurrentPage(pageNumber + 1);
      setRefetchPage(2);
    } 
  }, [keyword])
  
  return (
    <>
    {isLoading && <p>Loading</p>}
    {!keyword
      ? <p>No results found</p>
      : 
      <div>
        <h2>Searching results for: {keyword}</h2>
        <h2>Results: {results.length}</h2>
        <ListContainer>
          { results.map((movie) => {
            return (<MovieCard
              isFavorite={false}
              id={movie.id}
              key={movie.id+uuidv4()}
              title={movie.title}
              img={movie.poster_path}
              rating={movie.vote_average}
              votes={movie.vote_count}
              overview={movie.overview}
              popularity={movie.popularity}
            />)})
          }
        </ListContainer>
        <p ref={observed}></p>
        <p>{isLoading ? 'Loading...' : ''}</p>
      </div>
    }
    </>
  )
}

export default Results
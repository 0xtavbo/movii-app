import React, { useRef, useEffect, useState } from 'react'
import { ListContainer } from './ListStyles';
import MovieCard from '../Card/MovieCard';
import useAxiosDiscover from '../../hooks/useAxiosDiscover';
import swal from '@sweetalert/with-react';
import { useIntersectionObserver } from '@react-hooks-library/core';

const List = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const observed = useRef();
  const { inView } = useIntersectionObserver(observed);

  let { error, pageNumber, results, isLoading, refetchData } = useAxiosDiscover(currentPage);

  useEffect(() => {
    if (inView) {
      refetchData(currentPage);
    }
  }, [inView])

  useEffect(() => {
    if(results) {
      setMoviesList([...moviesList, ...results]);
      setCurrentPage(pageNumber + 1);
    } 
    if (error !== '') {
      swal(error, {
        className: "bg-color",
      });
    }  
  }, [results])

  return (
    <>
      <h1>Trending movies</h1>
      <ListContainer>
        { moviesList.map((movie) => {
          return (<MovieCard
            isFavorite={false}
            id={movie.id}
            key={movie.id}
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
      <div>
        Loading...
      </div>
    </>
  )
}

export default List
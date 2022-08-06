import React, { useEffect, useState } from 'react'
import { ListContainer } from './ListStyles';
import MovieCard from '../Card/MovieCard';
import useAxiosDiscover from '../../hooks/useAxiosDiscover';
import swal from '@sweetalert/with-react';

const List = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);

  const [error, pageNumber, results, isLoading] = useAxiosDiscover(1);

  useEffect(() => {
    if(results) {
      setMoviesList(results);
      setPage(pageNumber);
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
    </>
  )
}

export default List
import React, { useEffect, useState } from 'react'
import { ListContainer } from './ListStyles';
import MovieCard from '../Card/MovieCard';
import { useNavigate } from 'react-router-dom'
import useAxiosDiscover from '../../hooks/useAxiosDiscover';
import swal from '@sweetalert/with-react';

const List = ({handleFavorite, favorites}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [error, pageNumber, results, isLoading] = useAxiosDiscover(1);

  useEffect(() => {
    if(!token) navigate('/login');
  }, [])

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
    <h1>List of movies</h1>
    <ListContainer>
      { moviesList.map((movie) => {
        return (<MovieCard
          favorites={favorites}
          isFavorite={false}
          handleFavorite={handleFavorite}
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
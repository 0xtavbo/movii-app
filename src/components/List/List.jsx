import React, { useEffect, useState } from 'react'
import { ListContainer } from './ListStyles';
import MovieCard from '../Card/MovieCard';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom'

const List = ({handleFavorite, favorites}) => {
  const [moviesList, setMoviesList] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(!token) navigate('/login');
  }, [])

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=41b1193a31de706dbf8d3e652263a058&language=en-US&page=1';
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data;
        setMoviesList(apiData.results);
      })
      .catch(error => {
        swal("API call network error",{
          className: "bg-color"});
      });
  }, [])

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
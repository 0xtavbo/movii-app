import React, {useEffect, useState} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import swal from '@sweetalert/with-react';
import {
  MovieContainerStyled,
  ButtonStyled,
  DetailContainerStyled,
  ImageContainerStyled,
  MovieOverviewContainer
} from './MovieDetailsStyles';
import {BiArrowFromRight} from "react-icons/bi";

const MovieDetails = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [searchParams, ] = useSearchParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const movieID = searchParams.get('movieID');

  useEffect(() => {
    if(!token) navigate('/login');
  }, [])

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=41b1193a31de706dbf8d3e652263a058&language=en-US`;
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data;
        setMovie(apiData);
        setIsLoading(false);
      })
      .catch(error => {
        swal("API call network error",{
          className: "bg-color"});
      });
  }, [movieID])

  return (
    <MovieContainerStyled>
      <ButtonStyled onClick={() => navigate('/discover')}>
        <BiArrowFromRight className='arrow-icon'/>
        Back to list
      </ButtonStyled>

      {isLoading ? <p>Loading...</p> :
        <>
          <h1>{movie.title}</h1>
          <DetailContainerStyled>
            <ImageContainerStyled>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </ImageContainerStyled>
            <div>
              <MovieOverviewContainer>{movie.overview}</MovieOverviewContainer>
                <div>Genres:
                  {movie.genres.map((genre, index) => {
                  return <p key={index}>{genre.name}</p>
                })}
              </div>
                <div>Production: 
                {movie.production_companies.map((company, index) => {
                  return <p key={index}>{company.name}</p>
                })}
              </div>
              <p>{movie.release_date}</p>
            </div>
          </DetailContainerStyled>
        </>
      }
    </MovieContainerStyled>
  )
}

export default MovieDetails
import React from 'react'
import { MovieCardStyled, SpanStyled, ButtonStyled, FavoriteIconStyled } from './MovieCardStyles'
import { FiArrowRightCircle } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MovieCard = ({fav, id, img, title, rating, votes, overview, popularity}) => {
  return (

      <MovieCardStyled
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
          }}
      >
        <FavoriteIconStyled
          onClick={fav}
          data-movie-id={id}
        >
          <AiOutlineHeart />
        </FavoriteIconStyled>
        <Link to={`/details?movieID=${id}`}>
          <h3>{title}</h3>
          <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
          <p>{overview.substring(0, 149)}...</p>
          <SpanStyled className={rating >= 7 ? 'green' : 'red'}>Rating: {rating}</SpanStyled>
          <p className='p-votes'>Votes: {votes}</p> 
          <p className='p-movie'>Popularity {Math.round(popularity)}</p>
          <ButtonStyled>
            <FiArrowRightCircle className='i-movie'/> 
            Read more
          </ButtonStyled>
        </Link>
      </MovieCardStyled>

  )
}

export default MovieCard
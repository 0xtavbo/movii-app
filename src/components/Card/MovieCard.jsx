import React, { useEffect, useState } from 'react'
import { MovieCardStyled, SpanStyled, ButtonStyled, FavoriteIconStyled } from './MovieCardStyles'
import { FiArrowRightCircle } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MovieCard = ({isFavorite, favorites, handleFavorite, id, img, title, rating, votes, overview, popularity}) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(favorites.some(movie => movie.id.toString() === id.toString()));
  }, [isInFavorites])
  
  const toggleFavorite = () => {
    setIsInFavorites(!isInFavorites)
  }

  return (
  <>
    {isFavorite ?
      // render Card for Favorites
      <MovieCardStyled favorite
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
          }}
      > 
        <FavoriteIconStyled
          onClick={(e) => {
            toggleFavorite();
            handleFavorite(e);}
          }
          data-movie-id={id}
        >
          {isInFavorites ? <AiFillHeart style={{color: 'red'}}/> : <AiOutlineHeart />}
        </FavoriteIconStyled>
        <Link to={`/details?movieID=${id}`}>
          <h3>{title}</h3>
          <img src={img} alt={title} />
        </Link>
      </MovieCardStyled>
    :
      // render Card for Discover and Search
      <MovieCardStyled
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
          }}
      >
        <FavoriteIconStyled
          onClick={(e) => {
            toggleFavorite();
            handleFavorite(e);}
          }
          data-movie-id={id}
        >
          {isInFavorites ? <AiFillHeart style={{color: 'red'}}/> : <AiOutlineHeart />}
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
    }
  </>


  )
}

export default MovieCard
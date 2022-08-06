import React, { useEffect, useState } from 'react'
import { MovieCardStyled, SpanStyled, ButtonStyled, FavoriteIconStyled } from './MovieCardStyles'
import { FiArrowRightCircle } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import useScreenWidth from '../../hooks/useScreenWidth';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites, addToFavorites } from '../../redux/slices/favoritesSlice';

const MovieCard = ({isFavorite, id, img, title, rating, votes, overview, popularity}) => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites.favorites);
  const isMovieInFavorites = favorites.find((m) => m.id === id);

  const handleFavorite = () => {
    if (isMovieInFavorites) {
      dispatch(removeFromFavorites({id: id}));
    } else {
      dispatch(addToFavorites({id: id, title: title, img: img}));
    }
  }

  const [ mobileWidth, widthSize ] = useScreenWidth();

  return (
  <>
    {isFavorite ?
      // render Card for Favorites
      <MovieCardStyled favorite
        whileHover={(widthSize <= mobileWidth)
          ? { scale: 1,
          transition: { duration: 0 },
          }
          : { scale: 1.05,
            transition: { duration: 0.5 },
          }
        }
      >
        <FavoriteIconStyled
          onClick={() => {
            handleFavorite();}
          }
          data-movie-id={id}
        >
          {isMovieInFavorites ? <AiFillHeart style={{color: 'red'}}/> : <AiOutlineHeart />}
        </FavoriteIconStyled>
        <Link to={`/details?movieID=${id}`}>
          <h3>{title}</h3>
          <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
        </Link>
      </MovieCardStyled>
    :
      // render Card for Discover and Search
      <MovieCardStyled
        whileHover={(widthSize <= mobileWidth)
          ? { scale: 1,
          transition: { duration: 0 },
          }
          : { scale: 1.05,
            transition: { duration: 0.5 },
          }
        }
      >
        <FavoriteIconStyled
          onClick={() => {
            handleFavorite();}
          }
          data-movie-id={id}
        >
          {isMovieInFavorites ? <AiFillHeart style={{color: 'red'}}/> : <AiOutlineHeart />}
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
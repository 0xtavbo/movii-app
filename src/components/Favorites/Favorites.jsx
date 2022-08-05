import React, { useEffect } from "react";
import { ListContainer } from "../List/ListStyles";
import MovieCard from "../Card/MovieCard";

const Favorites = ({handleFavorite, favorites}) => {

  return (
    <>
      <h1>Favorites</h1>
      <ListContainer>
        {favorites.length < 1 &&
          <p>You don't have favorite movies</p>
        }
        {favorites.map((movie) => {
          return (
            <MovieCard
              favorites={favorites}  
              isFavorite={true}
              handleFavorite={handleFavorite}
              id={movie.id}
              key={movie.id}
              title={movie.title}
              img={movie.imgSource}
            />
          );
        })}
      </ListContainer>
    </>
  );
};

export default Favorites;

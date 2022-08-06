import React, { useEffect } from "react";
import { ListContainer } from "../List/ListStyles";
import MovieCard from "../Card/MovieCard";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const counter = useSelector(state => state.favorites.counter);

  return (
    <>
      <h1>Favorites</h1>
      <ListContainer>
        {counter < 1 &&
          <p>You don't have favorite movies</p>
        }
        {favorites?.map((movie) => {
          return (
            <MovieCard
              isFavorite={true}
              id={movie.id}
              key={movie.id}
              title={movie.title}
              img={movie.img}
            />
          );
        })}
      </ListContainer>
    </>
  );
};

export default Favorites;

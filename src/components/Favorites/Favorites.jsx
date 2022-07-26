import React, { useEffect, useState } from "react";
import { ListContainer } from "../List/ListStyles";
import MovieCard from "../Card/MovieCard";
import { useNavigate } from "react-router-dom";

const Favorites = ({favorites}) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/login");
  }, []);

  useEffect(() => {
    const localFavorites = localStorage.getItem('movii_favs');

    if (localFavorites !== null) setFavoriteMovies(JSON.parse(localFavorites));
  }, []);

  return (
    <>
      <h1>Favorites</h1>
      <ListContainer>
        {favoriteMovies.map((movie) => {
          return (
            <MovieCard
              isFav={true}
              fav={favorites}
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

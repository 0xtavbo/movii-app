import React, { useEffect, useState } from "react";
import { ListContainer } from "../List/ListStyles";
import MovieCard from "../Card/MovieCard";
import { useNavigate } from "react-router-dom";

const Favorites = ({favs}) => {
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/login");
  }, []);

  useEffect(() => {
    const localFavorites = localStorage.getItem('movii_favs');

    if (localFavorites !== null) setFavorites(JSON.parse(localFavorites));
  }, []);

  return (
    <>
      <h1>Favorites</h1>
      <ListContainer>
        {favorites.map((movie) => {
          return (
            <MovieCard
              isFav={true}
              fav={favs}
              id={movie.id}
              key={movie.id}
              title={movie.title}
            />
          );
        })}
      </ListContainer>
    </>
  );
};

export default Favorites;

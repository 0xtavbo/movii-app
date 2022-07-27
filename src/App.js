import "./App.css";
import { useState, useEffect } from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import MovieDetails from "./components/Details/MovieDetails";
import Results from "./components/Results/Results";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  let localFavorites;
  let tempFavMovies;

  useEffect(() => {
    const localFavorites = localStorage.getItem("movii_favs");

    if (localFavorites !== null) setFavoriteMovies(JSON.parse(localFavorites));
  }, []);

  const handleFavorite = (e) => {
    localFavorites = localStorage.getItem("movii_favs");

    if (localFavorites === null) {
      tempFavMovies = [];
    } else {
      tempFavMovies = JSON.parse(localFavorites);
    }

    const movieToHandle = {
      id: e.currentTarget.dataset.movieId,
      title: e.currentTarget.parentElement.querySelector("h3").innerText,
      imgSource: e.currentTarget.parentElement
        .querySelector("img")
        .getAttribute("src"),
    };

    let movieIsInArray = tempFavMovies.find((movie) => {
      return movie.id === movieToHandle.id;
    });

    if (!movieIsInArray) {
      tempFavMovies.push(movieToHandle);
      localStorage.setItem("movii_favs", JSON.stringify(tempFavMovies));
      setFavoriteMovies(tempFavMovies);
    } else {
      let moviesLeft = tempFavMovies.filter((movie) => {
        return movie.id !== movieToHandle.id;
      });
      localStorage.setItem("movii_favs", JSON.stringify(moviesLeft));
      setFavoriteMovies(moviesLeft);
    }
  };

  return (
    <Layout>
      <Navbar />

      <ReactDomRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route
          path="/discover"
          element={
            <List handleFavorite={handleFavorite} favorites={favoriteMovies} />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              handleFavorite={handleFavorite}
              favorites={favoriteMovies}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              handleFavorite={handleFavorite}
              favorites={favoriteMovies}
            />
          }
        />
      </ReactDomRoutes>

      <Footer />
    </Layout>
  );
}

export default App;

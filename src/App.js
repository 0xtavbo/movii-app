import "./App.css";
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
  const isAuth = localStorage.getItem("token");
  let favoriteMovies;
  let tempFavMovies;

  const handleFavorite = (e) => {
    favoriteMovies = localStorage.getItem("movii_favs");

    if (favoriteMovies === null) {
      tempFavMovies = [];
    } else {
      tempFavMovies = JSON.parse(favoriteMovies);
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
    } else {
      let moviesLeft = tempFavMovies.filter((movie) => {
        return movie.id !== movieToHandle.id;
      });
      localStorage.setItem("movii_favs", JSON.stringify(moviesLeft));
    }
  };

  return (
    <Layout>
      <Navbar />

      <ReactDomRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/discover" element={<List favorites={handleFavorite} />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/results" element={<Results />} />
        <Route path="/favorites" element={<Favorites />} />
      </ReactDomRoutes>

      <Footer />
    </Layout>
  );
}

export default App;

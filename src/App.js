import "./App.css";
import { useState, useEffect } from "react";
import {
  Routes as ReactDomRoutes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login/Login";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import MovieDetails from "./components/Details/MovieDetails";
import Results from "./components/Results/Results";
import Favorites from "./components/Favorites/Favorites";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/discover");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <Layout>
      <Navbar />

      <ReactDomRoutes>
        <Route path="/" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/discover" element={<List />} />
        <Route path="/results" element={<Results />} />
        <Route path="/favorites" element={<Favorites />} />
      </ReactDomRoutes>

      <Footer />
    </Layout>
  );
}

export default App;

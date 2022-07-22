import "./App.css";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import MovieDetails from "./components/Details/MovieDetails";
import Results from "./components/Results/Results";

function App() {
  const isAuth = localStorage.getItem("token");

  return (
    <Layout>
      <Navbar />

      <ReactDomRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/discover" element={<List />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/results" element={<Results />} />
      </ReactDomRoutes>

      <Footer />
    </Layout>
  );
}

export default App;

import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  const isAuth = localStorage.getItem("token");

  return (
    <Layout>
      <Navbar />
      <ReactDomRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
      </ReactDomRoutes>
      <Footer />
    </Layout>
  );
}

export default App;

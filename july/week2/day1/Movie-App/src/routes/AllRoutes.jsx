import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Movies from "../components/Movies";
import Movie from "../components/Movie";
import Layout from "../Layout";
import Landing from "../components/LandingPage";
import App from "../App";


function AllRoutes() {
  return (
    <Routes>
      <Route element={<Layout/>} path="/">
        <Route element={<Landing />} path="/" />
        <Route element={<Movies />} path="/movies" />
        <Route element={<App />} path="/test" />
        <Route element={<Movie />} path="/movies/:id" />
      </Route>
    </Routes>
  );
}

export default AllRoutes;

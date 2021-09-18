/* eslint-disable */

import React, { useDebugValue, useState, useEffect } from "react";
import "./styles.css";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
// import AddToWatchList from "./components/AddToWatchList";

export default function App(props) {
  const [movies, setMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  // const [watchlist, setWatchlist] = useState([]);

  async function getAllMovies() {
    let allMovies = await axios.get("https://hub.dummyapis.com/vj/wzGUkpZ#");
    let moviesArray = allMovies.data;
    setMovies(moviesArray);

    // below is to pick a single recommendation
    let moviesArrayLentgh = Object.keys(moviesArray).length;
    let recomIndex = Math.floor(Math.random() * moviesArrayLentgh);
    console.log(recomIndex);
    console.log(moviesArrayLentgh);
    setRecommended(moviesArray[recomIndex]);
  }

  //run getAllmovies only once, when page loads
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="App">
      <Header title="Recommendation" />
      <MovieCard
        name={recommended.name}
        releasedOn={recommended.releasedOn}
        bannerUrl={recommended.bannerUrl}
      />
      <Header title="All Movies" />
      {/* This will map and render every movie within movies array */}
      <div className="moviesSection">
        {movies.map((movie) => {
          return (
            <MovieCard
              name={movie.name}
              releasedOn={movie.releasedOn}
              bannerUrl={movie.bannerUrl}
            />
          );
        })}
      </div>
      <Header title="Watchlist" />
    </div>
  );
}

/* eslint-disable */

import React, { useDebugValue, useState, useEffect } from "react";
import "./styles.css";
import MovieCard from "./components/MovieCard";
import Heading from "./components/Heading";
import AddToWatchList from "./components/AddToWatchList";
import RemoveFromWatchlist from "./components/RemoveFromWatchlist";

export default function App(props) {
  const [movies, setMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [watchlist, setWatchList] = useState([]);

  // run axios and set state to movies
  async function getMovies() {
    const moviesPromise = await axios.get(
      "https://hub.dummyapis.com/vj/wzGUkpZ#"
    );
    const moviesArray = moviesPromise.data;
    setMovies(moviesArray);

    // below is to pick a single recommendation
    let moviesArrayLentgh = Object.keys(moviesArray).length;
    let recomIndex = Math.floor(Math.random() * moviesArrayLentgh);
    setRecommended(moviesArray[recomIndex]);
    // console.log(moviesArray[recomIndex]);
  }

  // run getMovies only once, when page loads
  useEffect(() => {
    getMovies();
  }, []);

  function addWatchListMovie(movie) {
    const newWatchlistArray = [...watchlist, movie];
    setWatchList(newWatchlistArray);
  }

  function removeWatchListMovie(movie) {
    // use .filter on watchlist state
    const newWathcList = watchlist.filter((e) => e.id !== movie.id);
    setWatchList(newWathcList);
  }

  return (
    <div className="App">
      <Heading title="Recommendation" />
      {/* recommendation needs to be resolved similarly to watchlist */}
      {/* <MovieCard movies={recommended} /> */}
      <Heading title="All Movies" />
      <MovieCard
        movies={movies}
        watchListComponent={AddToWatchList}
        watchlistHandler={addWatchListMovie}
      />
      <Heading title="Watchlist" />
      <MovieCard
        movies={watchlist}
        watchListComponent={RemoveFromWatchlist}
        watchlistHandler={removeWatchListMovie}
      />
    </div>
  );
}

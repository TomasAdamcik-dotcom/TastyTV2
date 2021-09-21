/* eslint-disable */

import React, { useDebugValue, useState, useEffect } from "react";
import "./styles.css";
import MovieCard from "./components/MovieCard";
import Heading from "./components/Heading";
import AddToWatchList from "./components/AddToWatchList";
import RemoveFromWatchlist from "./components/RemoveFromWatchlist";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckAsWatched from "./components/CheckAsWatched";
import RecommendationCard from "./components/RecommendationCard";

export default function App(props) {
  const [movies, setMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [watchlist, setWatchList] = useState([]);
  const [notes, setNotes] = useState([]);
  // const [watched, setWatched] = useState([]);

  async function getMovies() {
    const moviesPromise = await axios.get(
      "https://hub.dummyapis.com/vj/wzGUkpZ#"
    );
    const moviesArray = moviesPromise.data;
    setMovies(moviesArray);

    // adding recommended movie
    let moviesCopyLentgh = Object.keys(moviesArray).length;
    let recomIndex = Math.floor(Math.random() * moviesCopyLentgh);
    setRecommended(moviesArray[recomIndex]);
  }

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

  function clearWatchlist() {
    setWatchList([]);
  }

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function addToWatched(movie) {
    setWatched((prevWatched) => {
      [...watched, movie];
    });
  }

  return (
    <body className="App">
      <Header />
      <main>
        <Heading title="Recommended for you" />

        <RecommendationCard
          movieName={recommended.name}
          movieRelease={recommended.releasedOn}
          movieImg={recommended.bannerUrl}
        />

        <Heading title="All Movies" />
        <MovieCard
          movies={movies}
          watchListComponent={AddToWatchList}
          watchlistHandler={addWatchListMovie}
          receiveNote={addNote}
          watchedComponent={CheckAsWatched}
          watchedListHandler={addToWatched}
        />
        <Heading title="Watchlist" />
        {/* <ClearWatchlist onClick={clearWatchlist} /> */}
        <Button
          name="Remove all from watchlist"
          buttonHandler={clearWatchlist}
        />
        <MovieCard
          movies={watchlist}
          watchListComponent={RemoveFromWatchlist}
          watchlistHandler={removeWatchListMovie}
        />
      </main>
      <Footer />
    </body>
  );
}

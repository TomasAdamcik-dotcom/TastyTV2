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

export default function App(props) {
  const [movies, setMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [watchlist, setWatchList] = useState([]);
  const [notes, setNotes] = useState([]);

  // run axios and set state to movies
  async function getMovies() {
    const moviesPromise = await axios.get(
      "https://hub.dummyapis.com/vj/wzGUkpZ#"
    );
    const moviesArray = moviesPromise.data;
    setMovies(moviesArray);

    // add 3 recommendations
    // function addRecommendedMovie() {
    //   const moviesCopy = moviesArray;

    //   for (let i = 0; i < 3; i++) {
    //     let moviesCopyLentgh = Object.keys(moviesCopy).length;
    //     let recomIndex = Math.floor(Math.random() * moviesCopyLentgh);
    //     // add to recommended arr
    //     console.log(moviesCopy[recomIndex]);
    //     const newRecomMovies = [...recommended, movies[recomIndex]];
    //     setRecommended(newRecomMovies);
    //   }
    // }
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

  function clearWatchlist() {
    setWatchList([]);
  }

  // function giveRecommendation() {
  //   const moviesCopy = movies;
  //   let moviesCopyLentgh = Object.keys(moviesCopy).length;
  //   let recomIndex = Math.floor(Math.random() * moviesCopyLentgh);
  //   // add to recommended
  //   const newRecommendation = moviesCopy[recomIndex];
  //   console.log(newRecommendation);
  // function newRecMovies(newRecommendation) {
  //   setRecommended((prevRecomMovies) => {
  //     return [...prevRecomMovies, newRecommendation];
  //   });
  //   newRecMovies();
  // }

  //   // RETURNS EMPTY STRING ON FIRST CLICK - THE SAME WHEN IS RAN ON PAGE LOAD
  //   console.log(recommended);
  // }

  // useEffect(() => {
  // giveRecommendation();
  // }, []);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <body className="App">
      <Header />
      <main>
        {/* <Heading title="Recommendation" /> */}
        {/* <Button
        name="Give me recommendation"
        buttonHandler={giveRecommendation}
      /> */}
        {/* <MovieCard movies={recommended} /> */}
        <Heading title="All Movies" />
        <MovieCard
          movies={movies}
          watchListComponent={AddToWatchList}
          watchlistHandler={addWatchListMovie}
          receiveNote={addNote}
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

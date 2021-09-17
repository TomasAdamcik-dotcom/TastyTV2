/* eslint-disable */

import React, { useDebugValue, useState, useEffect } from "react";
import "../styles.css";
import RecMovieCard from "./RecMovieCard";
import RecommendationsContainer from "./RecommendationsContainer";
import WatchlistContainer from "./WatchlistContainer";

// movie title
// movie released date
// movie image
// watch later
// watched
// edit notes
// note

export default function App(props) {
  const [movies, setMovies] = useState([]);

  async function getAllMovies() {
    let allMovies = await axios.get("https://hub.dummyapis.com/vj/wzGUkpZ#");
    console.log(allMovies.data);
    setMovies(allMovies.data);
  }

  //run getAllmovies only once, when page loads
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="App">
      {/* <RecommendationsContainer />
      <WatchlistContainer /> */}

      {/* This will map and render every movie within movies array */}
      {movies.map((movie) => {
        return (
          <RecMovieCard
            name={movie.name}
            releasedOn={movie.releasedOn}
            bannerUrl={movie.bannerUrl}
          />
        );
      })}
    </div>
  );
}

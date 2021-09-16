import React from "react";
import WatchMovieCard from "./WatchMovieCard";

function WatchlistContainer() {
  return (
    <div>
      <h2>Watchlist container</h2>
      <button>Remove all items from watchlist</button>
      <button>Remove all watched</button>
      <WatchMovieCard />
    </div>
  );
}

export default WatchlistContainer;

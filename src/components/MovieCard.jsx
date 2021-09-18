import React from "react";

function MovieCard(props) {
  const WatchListComponent = props.watchListComponent;
  return (
    <div className="moviesContainer">
      {/* need to map my movies into new array */}
      {props.movies.map((movie, index) => (
        <div
          className="movieCard"
          onClick={() => props.watchlistHandler(movie)}
        >
          <h4>{movie.name}</h4>
          <p>Released: {movie.releasedOn}</p>
          <img src={movie.bannerUrl} alt="movie_banner" />
          <WatchListComponent />
        </div>
      ))}
    </div>
  );
}

export default MovieCard;

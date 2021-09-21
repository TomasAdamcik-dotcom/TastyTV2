import React, { useState } from "react";

function MovieCard(props) {
  // const WatchedComponent = props.watchedComponent;
  const [note, setNote] = useState([]);

  function sendNote(event) {
    props.receiveNote(note);
    event.preventDefault();
  }

  function saveNote(event) {
    const { value } = event.target;
    setNote((oldNote) => {
      return {
        ...oldNote,
        value
      };
    });
  }

  const WatchListComponent = props.watchListComponent;
  return (
    <div className="moviesContainer">
      {props.movies.map((movie, index) => (
        <div className="movieCard card">
          <h4>{movie.name}</h4>
          <p>Released: {movie.releasedOn}</p>
          <img src={movie.bannerUrl} alt="movie_banner" />

          {/* ADD/REMOVE TO/FROM WATCHLIST */}
          <div onClick={() => props.watchlistHandler(movie)}>
            <WatchListComponent />
          </div>

          {/* NOTES */}
          <form>
            {" "}
            <textarea
              value={note.content}
              onChange={saveNote}
              cols="15"
              rows="3"
              placeholder="Add a note..."
            ></textarea>
            <br />
            <button onClick={sendNote}>Save</button>
          </form>

          {/* WATCHED - crashing when applied */}
          {/* <div onChange={() => props.watchedListHandler(movie)}>
            <WatchedComponent />
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default MovieCard;

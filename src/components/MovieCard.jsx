import React, { useState } from "react";

function MovieCard(props) {
  const [note, setNote] = useState({ identification: "", comment: "" });

  function sendNote(event) {
    // before SVGAnimatedInteger, append id
    props.receiveNote(note);
    event.preventDefault();
  }

  function saveNote(event) {
    const { indentification, comment } = event.target;
    setNote((oldNote) => {
      return {
        ...oldNote,
        [indentification]: comment
      };
    });
  }

  const WatchListComponent = props.watchListComponent;
  return (
    <div className="moviesContainer">
      {/* need to map my movies into new array */}
      {props.movies.map((movie, index) => (
        <div className="movieCard card">
          <h4>{movie.name}</h4>
          <p>Released: {movie.releasedOn}</p>
          <img src={movie.bannerUrl} alt="movie_banner" />
          <div onClick={() => props.watchlistHandler(movie)}>
            <WatchListComponent />
          </div>

          <form>
            {" "}
            <textarea
              key={movie.id}
              value={note.content}
              onChange={saveNote}
              cols="15"
              rows="3"
              placeholder="Add a note..."
            ></textarea>
            <br />
            <button onClick={sendNote}>Save</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;

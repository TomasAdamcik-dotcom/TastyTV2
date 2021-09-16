import React from "react";

function WatchMovieCard() {
  // buttons should trigger a state change

  return (
    <div>
      <h3>Movie title</h3>
      <p>Released on: date</p>
      <img src="" alt="" />
      {/* will set watchilist to false */}
      <button>Remove from watchlist</button>
      {/* will changed watched to true */}
      <button>Watched</button>
      {/* will let me edit notes */}
      <button>Edit</button>
    </div>
  );
}

export default WatchMovieCard;

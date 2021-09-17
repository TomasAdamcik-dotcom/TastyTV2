import React from "react";

function RecMovieCard(props) {
  return (
    // I will use this to render movies - I need have data passed
    // from App.js through t oRecommendationsContainer via props

    // each button needs to trigger a function and update of state

    <div>
      <h2>{props.name}</h2>
      <p>{props.releasedOn}</p>
      <img src={props.bannerUrl} alt="movie_image" />
      <br />
      {/* need to be added to watchlist and render in watchlist container */}
      <button>Add to watchlist</button>
      {/* need to change status to watched */}
      <button>Watched</button>
      {/* need to hold text in textarea below */}
      <button>Edit</button>
    </div>
  );
}

export default RecMovieCard;

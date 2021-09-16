import React from "react";

function RecMovieCard() {
  return (
    // I will use this to render movies - I need have data passed
    // from App.js through t oRecommendationsContainer via props

    // each button needs to trigger a function and update of state

    <div>
      <h3>props.Movie title</h3>
      <p>props.Released on: date</p>
      <img src="props.url" alt="" />
      {/* change state of watch later to true */}
      <button>Watch later</button>
      {/* change state of watched to true */}
      <button>Watched</button>
      {/* updates state of note and stores text in it  */}
      <button>Edit</button>
    </div>
  );
}

export default RecMovieCard;

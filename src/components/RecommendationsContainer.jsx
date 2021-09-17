import React from "react";
import RecMovieCard from "./RecMovieCard";

function RecommendationsContainer() {
  // 1. RENDER RECOMMENDATIONS
  // render recommendations of films
  //get films data using axios
  // pass these as a state into an array
  //  this array needs to be passed into RecMovieCard using props
  // this array needs to be stored in app.js
  // render them using RecMovieCard component

  return (
    <div>
      <h2>Recommendations</h2>
      <RecMovieCard />
    </div>
  );
}

export default RecommendationsContainer;

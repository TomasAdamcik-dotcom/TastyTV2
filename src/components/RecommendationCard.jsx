import React from "react";

function RecommendationCard(props) {
  return (
    <div className="moviesContainer">
      <div className="movieCard card">
        <h4>{props.movieName}</h4>
        <p>Released: {props.movieRelease}</p>
        <img src={props.movieImg} alt="movie_banner" />
      </div>
    </div>
  );
}

export default RecommendationCard;

import React from "react";

function MovieCard(props) {
  return (
    // I will use this to render movies - I need have data passed

    <div className="movieCard">
      <h2>{props.name}</h2>
      <p>{props.releasedOn}</p>
      <img src={props.bannerUrl} alt="movie_image" />
    </div>
  );
}

export default MovieCard;

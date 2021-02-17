import React from "react";
import { Link } from "react-router-dom";

export default ({ singleMovie, toggleFavorite, isFavorite }) => {
  console.log("single movie", singleMovie);
  return (
    <div>
      <h2>Movie</h2>
      <div>
        {singleMovie ? (
          <div>
            <div
              key={singleMovie.imdbID}
              className="card"
              style={{ width: 18 + "rem" }}
            >
              <img
                src={singleMovie.Poster}
                className="card-img-top"
                alt="imagen"
              />
              <div className="card-body">
                <p className="card-text">{singleMovie.Title}</p>
              </div>

              <button
                onClick={() =>
                  toggleFavorite(singleMovie.Title, singleMovie.Poster)
                }
                className="btn btn-warning"
              >
                {isFavorite ? <p>Remove Favorite</p> : <p>Add Favorite</p>}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

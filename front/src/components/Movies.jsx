import React from "react";
import { Link } from "react-router-dom";

export default ({ movies }) => {
  return (
    <div className="container">
      <h2>Movies</h2>
      <div className="row">
        {movies &&
          movies.map((movie) => {
            return (
              <Link key={movie.imdbID} to={`/search/${movie.imdbID}`}>
                <div
                  className="col-xs-4 col-sm-4 col-lg-4 d-flex justify-content center m-auto pr-1"
                  style={{ width: 25 + "rem" }}
                >
                  <img
                    src={movie.Poster}
                    className="card-img-top"
                    alt="imagen"
                  />
                  <div className="card-body">
                    <p className="card-text">{movie.Title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

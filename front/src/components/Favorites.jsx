import React from "react";

const Favorites = ({ favorites, handleDelete }) => {
  console.log("FAVORITES", favorites);
  return (
    <div>
      <h2>Favoritas</h2>
      {favorites &&
        favorites.map((fav) => (
          <ol>
            <li>
              {" "}
              <p>{fav.title}</p>{" "}
            </li>
            <button onClick={() => handleDelete(fav.id)}>Remove ( - )</button>
          </ol>
        ))}
    </div>
  );
};
export default Favorites;

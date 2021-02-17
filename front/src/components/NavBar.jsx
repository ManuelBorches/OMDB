import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleSubmit, handleChange, user, logout }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand" href="#">
      OMDB
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Menu<span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/favorites" className="dropdown-item" href="#">
              Favorites
            </Link>
          </div>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          type="text"
          className="form-control"
          placeholder="Movies"
          onChange={handleChange}
        />
        <button type="button" className="btn btn-dark" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
      {user ? (
        <button onClick={logout} type="button" className="btn btn-light">
          {" "}
          LogOut{" "}
        </button>
      ) : (
        <div>
          <Link to={"/login"}>
            <button type="button" className="btn btn-light">
              {" "}
              LogIn{" "}
            </button>
          </Link>
          <Link to={"/register"}>
            <button type="button" className="btn btn-light">
              {" "}
              Register{" "}
            </button>
          </Link>
        </div>
      )}
    </div>
  </nav>
);
export default Navbar;

import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Movies from "../components/Movies";

import { connect } from "react-redux";
import { fetchMovies } from "../store/action-creators/movies";
import { fetchLogout } from "../store/action-creators/users";

const mapStateToProps = function (state) {
  return {
    movie: state.movies.list.Search, // store.combreducer.statekey
    user: state.users.userLogin.id, // pregunto por el id de un usuario que podria estar loggeado antes de refresh
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchPelis: (movie) => dispatch(fetchMovies(movie)),
    logout: () => dispatch(fetchLogout()),
  };
};

class NavBarContainer extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        movie: "",
      });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ movie: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchPelis(this.state.movie);
  }

  render() {
    return (
      <div>
        <NavBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          user={this.props.user}
          logout={this.props.logout}
        />
        <Movies movies={this.props.movie} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);

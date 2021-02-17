import React, { Component } from "react";
import { connect } from "react-redux";

import Movies from "../components/Movies";
import { fetchMovies } from "../store/action-creators/movies.js";

const mapStateToProps = function (state) {
  return {
    list: state.list.Search,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchMovies: () => dispatch(fetchMovies(movies)),
  };
};

class MoviesContainer extends Component {
  /* constructor(props) {
    super(props);
  } */
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return <Movies movies={this.props.list} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

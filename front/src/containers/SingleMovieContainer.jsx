import React from "react";
import { connect } from "react-redux";
import { fetchSingleMovie } from "../store/action-creators/movies";
import SingleMovie from "../components/SingleMovie";
import { AddFavorites } from "../store/action-creators/users";
import { getFavorites } from "../store/action-creators/users";

// recibo el match
const mapStateToProps = function (state, ownProps) {
  console.log("ESTE ES EL STATE", state);
  console.log("ESTE ES EL OWNPROPS", ownProps);
  return {
    selected: state.movies.selected,
    match: ownProps.match,
    userId: state.users.userLogin.id,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchSingleMovie: (id) => dispatch(fetchSingleMovie(id)),
    addFavorite: (data) => dispatch(AddFavorites(data)),
    getFavorites: (idUser) => dispatch(getFavorites(idUser)),
  };
};

class SingleMovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
  toggleFavorite(title, poster) {
    if (this.state.isFavorite) {
      this.setState({ isFavorite: false });
    } else {
      this.setState({ isFavorite: true });
      this.props
        .addFavorite({
          title,
          poster,
          user: this.props.userId,
        })
        .then(() => this.props.getFavorites(this.props.userId));
    }
  }
  componentDidMount() {
    this.props.fetchSingleMovie(this.props.match.params.id);
  }

  render() {
    console.log("ACA ESTAN LAS PROPS VER MATCH", this.props.selected);
    return (
      <SingleMovie
        singleMovie={this.props.selected}
        isFavorite={this.state.isFavorite}
        toggleFavorite={this.toggleFavorite}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMovieContainer);

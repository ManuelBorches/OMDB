import React from "react";
import { connect } from "react-redux";
import Favorites from "../components/Favorites";
import { getFavorites, deleteFavorites } from "../store/action-creators/users";

const mapDispatchToProps = (dispatch) => {
  return {
    getFavorites: (userId) => dispatch(getFavorites(userId)),
    deleteFavorites: (id) => dispatch(deleteFavorites(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    userId: state.users.userLogin.id,
    favorites: state.users.favorites,
  };
};

class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.getFavorites(this.props.userId);
  }

  handleDelete(id) {
    this.props
      .deleteFavorites(id)
      .then(() => this.props.getFavorites(this.props.userId));
    this.props.history.push("/");
  }

  render() {
    console.log("PROPS DE FAVORITE CONTAINER", this.props);
    return (
      <div>
        <Favorites
          favorites={this.props.favorites}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);

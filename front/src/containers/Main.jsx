import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBarContainer from "./NavBarContainer";
import SingleMovieContainer from "./SingleMovieContainer";
import RegisterContainer from "./RegisterContainer";
import LoginContainer from "./LoginContainer";
import { connect } from "react-redux";
import { fetchIsLogged } from "../store/action-creators/users";
import FavoritesContainer from "./FavoritesContainer";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isLogged: () => dispatch(fetchIsLogged()),
  };
};

class Main extends Component {
  componentDidMount() {
    this.props.isLogged();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/search" component={NavBarContainer} />
          <Route exact path="/search/:id" component={SingleMovieContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/favorites" component={FavoritesContainer} />
          <Redirect from="/" to="/search" />
        </Switch>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);

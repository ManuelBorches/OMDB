import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { fetchLogin } from "../store/action-creators/users";

/* const mapStateToProps = function (state) {
  return {
    login: state.userLogin,
  };
}; */

/* const mapDispatchToProps = function (dispatch, ownProps) {
  const history = ownProps.history;
  return {
    fetchLogin: (data) => dispatch(fetchLogin(data), history),
  };
}; */

const mapDispatchToProps = function (dispatch) {
  return {
    fetchLogin: (data) => dispatch(fetchLogin(data)),
  };
};

class LoginContainer extends React.Component {
  constructor() {
    super(),
      (this.state = {
        email: "",
        password: "",
      });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchLogin(this.state).then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <Login
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);

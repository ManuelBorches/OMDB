import React from "react";
import { connect } from "react-redux";
import Register from "../components/Register";
import { fetchRegister } from "../store/action-creators/users";

const mapDispatchToProps = function (dispatch, ownProps) {
  const history = ownProps.history;
  return {
    fetchRegister: (data) => dispatch(fetchRegister(data)),
    history,
  };
};

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props),
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
    console.log("ESTAS SON LAS PROPS", this.props);
    e.preventDefault();
    this.props
      .fetchRegister(this.state)
      .then(() => this.props.history.push("/login")); //history.goback
  }

  render() {
    return (
      <Register
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(RegisterContainer);

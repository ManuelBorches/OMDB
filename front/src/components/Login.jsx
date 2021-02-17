import React from "react";

const Login = ({ handleChange, handleSubmit }) => (
  <div>
    <h1>LOGIN</h1>
    <form>
      <div className="form group ">
        <label htmlFor="exampleInputEmail1" className="col-sm-2 col-form-label">
          Email address:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="email"
          onChange={handleChange}
        ></input>
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          id="exampleInputPassword"
          name="password"
          className="form-control"
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  </div>
);
export default Login;

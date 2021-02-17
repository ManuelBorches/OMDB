import React from "react";

const Register = (
  { handleChange, handleSubmit } //require
) => (
  <div>
    <h1>REGISTER</h1>
    <form>
      <div className="form group ">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email address:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={handleChange}
        ></input>
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form group">
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
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
export default Register;

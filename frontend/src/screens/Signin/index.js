import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="container h-100 pt-5">
      <h1>Sign In</h1>
      <div className="d-flex flex-column h-100">
        <form action="">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" className="form-control" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Don't have an Account?</div>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
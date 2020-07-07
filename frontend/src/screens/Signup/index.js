import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container h-100 pt-5">
      <h1>Sign Up</h1>
      <div className="d-flex flex-column h-100">
        <form action="">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" className="form-control" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
            <label htmlFor="password-confirmation">Password confirmation</label>
            <input id="password-confirmation" type="password" className="form-control" />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Already have an Account?</div>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
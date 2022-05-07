import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <section className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon login logo"
        />
      </Link>

      <article className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to the Amazon's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </article>
    </section>
  );
}

export default Login;

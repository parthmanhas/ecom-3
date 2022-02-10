import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/oil-man.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <div className="logo-container container-fluid d-flex justify-content-center">
        <img src={logo} alt="Oil Man" />
      </div> */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/blog">Blog</a>
              <a className="nav-link" href="/about">About</a>
              <a className="nav-link" href="/log-in">Log In</a>
              <a className="nav-link" href="/cart">Cart</a>
              <a className="nav-link" href="/currency">Currency</a>
              <a className="nav-link" href="/shop">Shop</a>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            <img src={logo} alt="Oil Man" />
          </Link>

          <ul className="right">
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/cart">My cart</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="material-icons">shopping_cart</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

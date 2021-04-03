import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarCool extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ "background-color": "#f6f6f6" }}
        >
          <Link to="/" className="link-nav">
            <h1 className="navbar-brands"> FixItNow </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            style={{ display: "relative" }}
            id="navbarNav"
          >
            <ul className="navbar-nav nav-element-center">
              <li className="nav-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/about"
                  className="Links"
                >
                  About us <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  className="Links"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-links ">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/shop"
                  className="Links"
                >
                  Services
                </Link>
              </li>
              <li className="nav-links ">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/blog"
                  className="Links"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-links ">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/contact"
                  className="Links"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div class="social text-gray ml-auto">
              <Link to="/cart" className="nav-links btn btn-green-small">
                <span className="Links-cart">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>My Cart
                </span>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/login"
                className="nav-links"
              >
                <span className="Links">Login</span>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/signup"
                className="nav-links"
              >
                <span className="Links">Sign Up</span>
              </Link>

              <Link to="#" className="Links">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="Links">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link to="#" className="Links">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="Links">
                <i class="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

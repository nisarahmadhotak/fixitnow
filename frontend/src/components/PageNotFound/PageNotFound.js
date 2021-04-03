import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto text-center text-uppercase text-title px-5">
            <img
              style={{ backgroundColor: "#fff", height: "20%", width: "60%" }}
              src="img/pagenotfound.png"
              alt=""
            />
            <h3 className="text-title">
              Return back to <Link to="/">Home</Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
export default class LoginRegister extends Component {
  state = {
    email: "",
    password: "",
    mode: "login"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    //   sign up and login user with strapi
    const { email, password, mode } = this.state;
    const data = {
      email,
      password,
      username: email,
      identifier: email
    };
    let url = "";
    if (mode === "login") {
      url = "/api/auth/local";
    }
    if (mode === "signup") {
      url = "/api/auth/local/register";
    }

    const userCreationRes = await axios({
      method: "POST",
      url,
      data
    });
    // console.log("USER", userCreationRes);

    // function frm parent - this sends data to the parent and tells user is created
    if (this.props.updateUser && typeof this.props.updateUser === "function") {
      this.props.updateUser(userCreationRes.data);

      // this is not a safe way to store jwt token - we are using localStorage for dev only
      // localStorage.setItem("user", JSON.stringify(userCreationRes));
    }
  };

  //end of user creation

  render() {
    const { email, password, mode } = this.state;
    return (
      <div className="RegisterOrLogIn container">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center text-primary text-capitalize">{mode}</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-outline-primary" type="submit">
                {mode}
              </button>
            </form>
            {mode === "login" && (
              <h4
                style={{ cursor: "pointer" }}
                className="text-primary"
                onClick={() => {
                  this.setState({ mode: "signup" });
                }}
              >
                Want to <strong>Sign up</strong> instead?
              </h4>
            )}
            {mode === "signup" && (
              <h4
                style={{ cursor: "pointer" }}
                className="text-primary"
                onClick={() => {
                  this.setState({ mode: "login" });
                }}
              >
                Want to Login instead?
              </h4>
            )}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Login from "./login";
import SignUp from "./signup";
import ProfilePage from "./ProfilePage";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
export default class RouteLogin extends Component {
  state = {
    user: null,
    mode: "login"
  };

  async componentDidMount() {
    console.log("componentdidmounted");
    const userRes = await axios({
      method: "GET",
      url: "/users/me"
    });
    console.log("users/me ROUte.js", userRes);
    if (userRes.data) {
      this.setState({ user: { user: userRes.data } });
    }

    // if (localStorage.getItem("user")) {
    //   const user = JSON.parse(localStorage.getItem("user"));
    // this.setState({ user });
    // }
  }

  logout = async () => {
    await axios({
      method: "GET",
      url: "/users/logout"
    });
    this.setState({ user: null, mode: "login" });

    // localStorage.removeItem("user");
    // this.setState({ user: null });
  };

  render() {
    const { user, mode } = this.state;
    return (
      <div>
        {/* {!user && (
          <LoginRegister
            updateUser={user => {
              this.setState({ user });
            }}
          />
        )} */}
        {/* {!user && mode === "login" && (
          <Login
            updateUser={(user, mode) => {
              this.setState({ user, mode });
            }}
          />
        )} */}

        {!user && mode === "signup" && (
          <SignUp
            updateUsers={(user, mode) => {
              this.setState({ user, mode });
            }}
          />
        )}
        {user && (
          <div>
            <ProfilePage user={user} />
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto">
                  <br />

                  <button
                    className="ui red inverted button"
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

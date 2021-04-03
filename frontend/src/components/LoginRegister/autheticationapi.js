import React, { createContext, Component } from "react";
import axios from "axios";
import UIkit from "uikit";

const AuthenticationContext = createContext();
const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:1337";
export default class AuthenticationProvider extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    bio: "",
    oneLiner: "",
    country: null,
    state: "",
    phoneNumber: "",
    city: "",
    zipcode: "",
    address: "",
    landmark: "",
    cancelled: false,
    paid: false,
    payerID: "",
    paymentToken: "",
    user: null,
    proceedToCheckout: false,
    isLogged: false,
    isSignedUp: false,
    error: {},
    imgUrl: "",
    imageID: 0,
    profileName: "",
    profileEmail: "",
    porfileAddress: ""
  };

  // ##############################################################################################
  //LIFECYCLE FUNC
  async componentDidMount() {
    console.log("componentdidmounted");
    const userRes = await axios({
      method: "GET",
      url: "/api/users/me"
    });
    console.log("users/me authentication.js", userRes);
    if (userRes.data) {
      const { image, username } = userRes.data;

      this.setState({
        user: { user: userRes.data },
        isLogged: true
      });
      console.log("image", image);
    }
    //getting the image of the profile
    const { imageID } = userRes.data;
    if (imageID !== 0) {
      const get_uploads = await axios({
        method: "GET",
        url: process.env.REACT_APP_BACKEND_URL + `/upload/files/${imageID}`
      });
      console.log("GET UPLOAD FILES : ", get_uploads.data.url);
      this.setState({
        imgUrl: get_uploads.data.url
      });
    }
  }
  // componentDidUpdate(prevProps, prevState) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.state.imageID !== prevState.imageID) {
  //     console.log("didupdate called");
  //   }
  // }

  // ##############################################################################################
  // LOGIN/SIGNUP/LOGOUT FUNC

  // logout func
  logout = async () => {
    await axios({
      method: "GET",
      url: "/users/logout"
    });
    this.setState({ user: null, isLogged: false, isSignedUp: false });

    // localStorage.removeItem("user");
    // this.setState({ user: null });
  };

  //logout notification
  notifyLogout = () => {
    UIkit.notification({
      message:
        "<span uk-icon='icon: sign-out'></span> You have Logged Out Successfully!",
      status: "danger",
      pos: "top-center",
      timeout: 1500
    });
  };

  //login notification
  notifyLogin = () => {
    UIkit.notification({
      message:
        "<span uk-icon='icon: sign-in'></span> You have Logged in Successfully!",
      status: "success",
      pos: "top-center",
      timeout: 1500
    });
  };

  // Handlechange functions
  handleLoginChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("HandleLoginchange /login ", e.target.value);
  };

  handleSignUpChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("HandleSignupchange /signup ", e.target.value);
  };

  // handleSubmit functions
  handleLoginSubmit = async e => {
    e.preventDefault();
    console.log("handleloginsubmit  called");

    try {
      const { email, password } = this.state;
      const data = {
        password,
        username: email,
        identifier: email
      };
      let res = await axios({
        method: "post",
        url: `api/auth/local`,
        data: data
      });

      if (res.data) {
        this.setState({
          user: res.data,
          isLogged: true
        });
      }
      return console.log(res.data);
    } catch (error) {
      console.log(error.response); // this is the main part. Use the response property from the error object

      return error.response;
    }
  };

  handleSignUpSubmit = async e => {
    e.preventDefault();

    // //   sign up and login user with strapi

    try {
      const { email, password } = this.state;
      const data = {
        username: email,
        email,
        password
      };
      let res = await axios({
        method: "post",
        url: "/api/auth/local/register",
        data: data
      });

      if (res.data) {
        this.setState({ user: res.data, isLogged: true, isSignedUp: true });
      }
      console.log("signupsubmit called");

      return console.log(res.data);
    } catch (error) {
      console.log(error.response); // this is the main part. Use the response property from the error object

      return error.response;
    }
  };

  // ##############################################################################################

  //PROFILE FUNC

  handleProfileUpdateChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
    console.log("handleProfileUpdateChange /userprofile ", e.target.value);
  };
  handleProfileFileChange = e => {
    console.log("target file", e.target.files[0]);
    this.setState({
      image: e.target.files[0]
    });
  };
  handleProfileUpdateSubmit = async e => {
    // this jwt token will be saved in express server and send back to react so that it is secured
    // const jwtToken = this.props.user.jwt;
    e.preventDefault();

    try {
      const userId = this.state.user.user.id;
      // const jwtToken = this.props.user.jwt;
      // console.log(jwtToken);
      const { bio, oneLiner, image, name, email } = this.state;
      const data = { bio, image, name, email };
      const updateUserRes = await axios({
        method: "PUT",
        url: `${API_URL}/users/${userId}`,
        data
      });
      console.log("update", updateUserRes);
      if (updateUserRes.status == "200") {
        UIkit.notification({
          message: "Your profile updated Successfully!",
          status: "success",
          pos: "top-center",
          timeout: 1500
        });
      }
    } catch (err) {
      console.log("update error: ", err.response);
      return err.response;
    }
  };

  handleProfilePostSubmit = async e => {
    // this jwt token will be saved in express server and send back to react so that it is secured
    // const jwtToken = this.props.user.jwt;
    e.preventDefault();
    console.log("files submiteed");
    console.log(this.state.image);

    const data = new FormData();
    data.append("files", this.state.image);
    data.get("files");
    console.log("data from submit", data);

    try {
      let res = await axios({
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL + "/upload",
        data: data
      });
      const id = res.data[0].id;

      const get_uploads = await axios({
        method: "GET",
        url: process.env.REACT_APP_BACKEND_URL + `/upload/files/${id}`,
        data
      });
      console.log("GET UPLOAD FILES : ", get_uploads.data.url);
      this.setState({
        imgUrl: get_uploads.data.url
      });
      const userId = this.state.user.user.id;

      const updateUserImageID = await axios({
        method: "PUT",
        url: `/api/users/${userId}`,
        data: { imageID: id }
      });
      console.log("upddateuser image id", updateUserImageID);

      if (res) {
        console.log(res);
        console.log("uploaded imagedata id", res.data[0].id);
        console.log(get_uploads.data.url);
      }
    } catch (error) {
      console.log(error.response); // this is the main part. Use the response property from the error object

      return error.response;
    }
  };

  // ##############################################################################################

  //SHIPPING FUNC

  handleShippingChangeOfCountryList = value => {
    this.setState({ country: value });
    console.log("country selected", value);
  };
  handleShippingChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleShippingSubmit = async e => {
    e.preventDefault();

    try {
      const {
        address,
        landmark,
        district,
        zipcode,
        city,
        country
      } = this.state;
      const data = { address, landmark, district, zipcode, city, country };
      const shippingRes = await axios({
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL + "/shippingaddresses",
        data
      });

      if (shippingRes) {
        console.log("shipping successfull", shippingRes);
        this.setState({
          proceedToCheckout: true
        });
      }
    } catch (err) {
      console.log(err.response);
      return err.response;
    }
  };

  //end of user creation

  render() {
    return (
      <AuthenticationContext.Provider
        value={{
          ...this.state,
          handleLoginSubmit: this.handleLoginSubmit,
          handleLoginChange: this.handleLoginChange,
          handleSignUpChange: this.handleSignUpChange,
          handleSignUpSubmit: this.handleSignUpSubmit,
          handleShippingChangeOfCountryList: this
            .handleShippingChangeOfCountryList,
          handleShippingSubmit: this.handleShippingSubmit,
          handleShippingChange: this.handleShippingChange,
          handleProfileUpdateChange: this.handleProfileUpdateChange,
          handleProfileUpdateSubmit: this.handleProfileUpdateSubmit,
          handleProfilePostSubmit: this.handleProfilePostSubmit,
          logout: this.logout,
          notifyLogout: this.notifyLogout,
          notifyLogin: this.notifyLogin,
          handleProfileFileChange: this.handleProfileFileChange
        }}
      >
        {this.props.children}
      </AuthenticationContext.Provider>
    );
  }
}

const AuthenticationConsumer = AuthenticationContext.Consumer;
export { AuthenticationConsumer, AuthenticationProvider };

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthenticationConsumer } from "./autheticationapi";
import { ProductConsumer } from "../../contextapi";
export default class SignUp extends Component {
  userProfileRedirect = () => {
    return this.props.history.push("/userprofile");
  };
  userShippingRedirect = () => {
    return this.props.history.push("/shippingaddress");
  };
  render() {
    return (
      <AuthenticationConsumer>
        {authValue => {
          const { email, password, username } = authValue;
          const { handleSignUpChange, handleSignUpSubmit } = authValue;
          return (
            <ProductConsumer>
              {productValue => {
                if (authValue.isSignedUp && productValue.cart.length < 1) {
                  return <div>{this.userProfileRedirect()}</div>;
                } else if (!authValue.isSignedUp) {
                  return (
                    <React.Fragment>
                      <section className="section-book">
                        <div className="roww">
                          <div className="book">
                            <div className="book_form">
                              <form
                                action="#"
                                className="form"
                                onSubmit={handleSignUpSubmit}
                              >
                                <div className="u-margin-bottom-medium">
                                  <h2 className="heading-secondary">Sign Up</h2>
                                </div>
                                <div className="form_group">
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form_input"
                                    placeholder="Email address"
                                    onChange={handleSignUpChange}
                                    value={email}
                                    required
                                  />
                                  <label className="form_label paragraph">
                                    Email address
                                  </label>
                                </div>

                                <div className="form_group">
                                  <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form_input"
                                    placeholder="password"
                                    onChange={handleSignUpChange}
                                    value={password}
                                    required
                                  />
                                  <label className="form_label paragraph">
                                    Password
                                  </label>
                                </div>

                                <div className="form_group">
                                  <input
                                    type="submit"
                                    value="Sign Up"
                                    className="btn btn-green"
                                  />
                                </div>
                                <div className="form_group">
                                  <Link to="/login" className="link-nav">
                                    <h2 className="text-capitalize">
                                      Want to Login instead?
                                    </h2>
                                  </Link>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </section>
                    </React.Fragment>
                  );
                } else if (authValue.isLogged && productValue.cart.length > 0) {
                  return <div>{this.userShippingRedirect()}</div>;
                }
              }}
            </ProductConsumer>
          );
        }}
      </AuthenticationConsumer>
    );
  }
}

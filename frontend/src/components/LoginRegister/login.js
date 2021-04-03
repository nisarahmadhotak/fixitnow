import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthenticationConsumer } from "./autheticationapi";
import { ProductConsumer } from "../../contextapi";

export default class Login extends Component {
  //Redirects
  userShopRedirect = () => {
    return this.props.history.push("/shop");
  };
  userShippingAddressRedirect = () => {
    return this.props.history.push("/shippingaddress");
  };
  render() {
    return (
      <AuthenticationConsumer>
        {authValue => {
          const { email, password, isLogged } = authValue;
          const {
            handleLoginChange,
            handleLoginSubmit,
            notifyLogin
          } = authValue;
          return (
            <ProductConsumer>
              {productValue => {
                if (isLogged && productValue.cart.length <= 0) {
                  return <div>{this.userShopRedirect()}</div>;
                } else if (!isLogged) {
                  return (
                    <React.Fragment>
                      <section className="section-book">
                        <div className="roww">
                          <div className="book">
                            <div className="book_form">
                              <form
                                action="#"
                                className="form"
                                onSubmit={handleLoginSubmit}
                              >
                                <div className="u-margin-bottom-medium">
                                  <h2 className="heading-secondary">Login</h2>
                                </div>

                                <div className="form_group">
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form_input"
                                    placeholder="Email address"
                                    onChange={handleLoginChange}
                                    value={email}
                                    required
                                  />
                                  <label
                                    for="email"
                                    className="form_label paragraph"
                                  >
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
                                    onChange={handleLoginChange}
                                    value={password}
                                    required
                                  />
                                  <label
                                    for="password"
                                    className="form_label paragraph"
                                  >
                                    Password
                                  </label>
                                </div>

                                <div className="form_group">
                                  <input
                                    type="submit"
                                    value="Signin"
                                    className="btn btn-green"
                                    onClick={() => {
                                      notifyLogin();
                                    }}
                                  />
                                </div>
                                <div className="form_group">
                                  <Link to="/signup" className="link-nav">
                                    <h2 className="text-capitalize">
                                      Want to Sign up instead?
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
                } else if (productValue.cart.length > 0 && authValue.isLogged) {
                  return <div>{this.userShippingAddressRedirect()}</div>;
                }
              }}
            </ProductConsumer>
          );
        }}
      </AuthenticationConsumer>
    );
  }
}

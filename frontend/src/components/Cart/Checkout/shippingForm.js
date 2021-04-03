import React, { Component } from "react";
import { AuthenticationConsumer } from "../../LoginRegister/autheticationapi";
import { ProductConsumer } from "../../../contextapi";
import CountrySelector from "../../ReusableComponents/CountryList/country";
export default class ShippingForm extends Component {
  //Redirects
  LoginRedirect = () => {
    return this.props.history.push("/login");
  };

  userCheckoutRedirect = () => {
    return this.props.history.push("/checkout");
  };

  render() {
    return (
      <AuthenticationConsumer>
        {authValue => {
          const { address, landmark, zipcode, district, city } = authValue;
          const { handleShippingChange, handleShippingSubmit } = authValue;
          return (
            <ProductConsumer>
              {productValue => {
                if (!authValue.isLogged) {
                  return <div>{this.LoginRedirect()}</div>;
                } else if (
                  authValue.isLogged &&
                  productValue.cart.length > 0 &&
                  authValue.proceedToCheckout === false
                ) {
                  return (
                    <div className="ProfilePage container">
                      <div className="row">
                        <div className="col-10 mx-auto">
                          <section className="section-book">
                            <div className="roww">
                              <div className="book">
                                <div className="book_form">
                                  <div className="u-margin-bottom-medium">
                                    <h2 className="header-tertiary">
                                      Shipping Address
                                    </h2>
                                  </div>
                                  <form
                                    onSubmit={handleShippingSubmit}
                                    className="form"
                                  >
                                    <div className="form_group"></div>
                                    <div className="form_group">
                                      <textarea
                                        id="address"
                                        name="address"
                                        className="form_input"
                                        placeholder="Address"
                                        value={address}
                                        onChange={handleShippingChange}
                                        required
                                        cols="30"
                                        rows="5"
                                      ></textarea>
                                      <label
                                        for="address"
                                        className="form_label paragraph"
                                      >
                                        Address
                                      </label>
                                    </div>

                                    <div className="form_group">
                                      <input
                                        type="text"
                                        name="landmark"
                                        id="landmark"
                                        value={landmark}
                                        onChange={handleShippingChange}
                                        className="form_input"
                                        placeholder="Landmark"
                                      />
                                      <label
                                        for="landmark"
                                        className="form_label paragraph"
                                      >
                                        Landmark
                                      </label>
                                    </div>

                                    <div className="form_group">
                                      <input
                                        type="number"
                                        min="0"
                                        name="zipcode"
                                        id="zipcode"
                                        value={zipcode}
                                        onChange={handleShippingChange}
                                        className="form_input"
                                        placeholder="Zipcode"
                                        required
                                      />
                                      <label
                                        for="zipcode"
                                        className="form_label paragraph"
                                      >
                                        Zipcode
                                      </label>
                                    </div>

                                    <div className="form_group">
                                      <input
                                        type="text"
                                        name="district"
                                        id="district"
                                        value={district}
                                        onChange={handleShippingChange}
                                        className="form_input"
                                        placeholder="District/City"
                                        required
                                      />
                                      <label
                                        for="district"
                                        className="form_label paragraph"
                                      >
                                        District/City
                                      </label>
                                    </div>

                                    <div className="form_group">
                                      <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        value={city}
                                        onChange={handleShippingChange}
                                        className="form_input"
                                        placeholder="City/Province/State"
                                        required
                                      />
                                      <label
                                        for="city"
                                        className="form_label paragraph"
                                      >
                                        City/Province/State
                                      </label>
                                    </div>

                                    <div className="form_group">
                                      {/* <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        value={country}
                                        onChange={handleShippingChange}
                                        className="form_input"
                                        placeholder="Country"
                                        required
                                      /> */}
                                      <CountrySelector
                                        id="country"
                                        className="form_input"
                                      />

                                      <label
                                        for="country"
                                        className="form_label paragraph"
                                      >
                                        Country
                                      </label>
                                    </div>

                                    <div className="form_group">
                                      <input
                                        type="submit"
                                        value="Submit"
                                        className="btn btn-green"
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* <h1 className="text-center text-primary text-capitalize">
                        Shipping Address
                      </h1>
                      {/* <form onSubmit={handleShippingSubmit}>
                        <div className="form-group">
                          <label htmlFor="email">
                            <strong>Email:</strong>
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleShippingChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">
                            <strong> name: </strong>
                          </label>
                          <input
                            className="form-control"
                            type="name"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleShippingChange}
                            required
                          />
                        </div>
                        <input
                          type="submit"
                          value="submit"
                          className="btn btn-primary"
                        />
                        <Link to="/checkout">
                          <button>Proceed to Checkout</button>
                        </Link>
                      </form> */}
                        </div>
                      </div>
                    </div>
                  );
                } else if (
                  authValue.isLogged &&
                  productValue.cart.length > 0 &&
                  authValue.proceedToCheckout
                ) {
                  return <div>{this.userCheckoutRedirect()}</div>;
                }
              }}
            </ProductConsumer>
          );
        }}
      </AuthenticationConsumer>
    );
  }
}

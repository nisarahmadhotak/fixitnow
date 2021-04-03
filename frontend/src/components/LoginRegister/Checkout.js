import React, { Component } from "react";
import Title from "../ReusableComponents/Title/Title";
import { ProductConsumer } from "../../contextapi";
import CheckoutList from "../Cart/Checkout/CheckoutList";
import { AuthenticationConsumer } from "../LoginRegister/autheticationapi";
import CheckoutTotals from "../Cart/Checkout/CheckoutTotal";
import CheckoutColumn from "../Cart/Checkout/CheckoutColumn";

export default class Checkout extends Component {
  LoginRedirect = () => {
    return this.props.history.push("/login");
  };

  render() {
    return (
      <AuthenticationConsumer>
        {authValue => {
          return (
            <ProductConsumer>
              {productValue => {
                if (!authValue.isLogged) {
                  return <div>{this.LoginRedirect()}</div>;
                } else if (authValue.isLogged && productValue.cart.length > 0) {
                  return (
                    <section>
                      <React.Fragment>
                        <Title name="your" title="cart"></Title>
                        <CheckoutColumn />
                        <CheckoutList value={productValue} />
                        <CheckoutTotals
                          value={productValue}
                          history={this.props.history}
                        />
                      </React.Fragment>
                    </section>
                  );
                }
              }}
            </ProductConsumer>
          );
        }}
      </AuthenticationConsumer>
    );
  }
}

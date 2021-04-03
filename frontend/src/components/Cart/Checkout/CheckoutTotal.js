import React from "react";
import { Link } from "react-router-dom";
import Paypal from "../../Paypal/Paypal";

export default function CheckoutTotals({ value, history }) {
  const { cartSubTotal, cartTotal, cartTax, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/shop"></Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <Paypal
              className="mr-3"
              totalAmount={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

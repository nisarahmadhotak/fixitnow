import React from "react";
import { ProductConsumer } from "../../contextapi";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center">
          <h3 className="text-title">
            Whoohoo! looks like you have nothing to fix
          </h3>
          <img src="img/emptycart.webp" alt="Empty Cart Icon" />
          <h2 className="text-title">
            Click<Link to="shop"> here</Link> to let us know when can we help
            you next
          </h2>
        </div>
      </div>
    </div>
  );
}

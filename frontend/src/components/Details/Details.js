import React, { Component } from "react";
import { ProductConsumer } from "../../contextapi";
import { Link } from "react-router-dom";
import ButtonContainer from "../ReusableComponents/Buttons/button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            price,
            inCart,
            company,
            info
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title  */}

              <div className="row">
                <div className="col-10  text-center text-slanted mx-auto  my-5">
                  <h1 className="text-blue">{title}</h1>
                </div>
              </div>
              {/* end title  */}
              {/* product info  */}
              <div className="row">
                <div className="col-10 col-md-6 mx-auto my-3">
                  <img
                    src={process.env.REACT_APP_BACKEND_URL + img[0].url}
                    alt="product"
                    className="img-fluid"
                  />
                </div>
                {/* product text */}
                <div className="col-10 col-md-6  mx-auto my-3">
                  <h1 className="text-capitalize">Service: {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong className="text-capitalize">
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mb-0 mt-3">
                    some info about the service:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons  */}
                  <div>
                    <Link to="/shop">
                      <ButtonContainer>back to service</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        // value.openModal(id);
                      }}
                    >
                      {inCart ? "fixing" : "fix it now"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
      // </Else>
      // </If>
    );
  }
}

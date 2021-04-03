import React, { Component } from "react";
// import styled from "styled-components";
import { ModalContainer } from "../ReusableComponents/Modal/ModalContainer";
import { ProductConsumer } from "../../contextapi";
import ButtonContainer from "../ReusableComponents/Buttons/button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, price, title } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5"
                    >
                      <h3 className="text-center text-capitalize text-blue">
                        item added to the cart
                      </h3>
                      {img.map(image => {
                        // <img className="img-fluid" src={img} alt="Product" />;
                        return (
                          <img
                            src={process.env.REACT_APP_BACKEND_URL + image.url}
                            alt="Product"
                            className="img-fluid"
                          />
                        );
                      })}
                      <h5>{title}</h5>
                      <h5 className="text-muted lead ">price: ${price}</h5>
                      <Link to="/shop">
                        <ButtonContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          continue shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

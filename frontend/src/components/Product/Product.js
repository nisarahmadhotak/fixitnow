import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../contextapi";
import PropTypes from "prop-types";
import ButtonContainer from "../ReusableComponents/Buttons/button";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductConsumer>
        {value => {
          return (
            <div
              onClick={() => {
                value.handleDetail(this.props.product.id);
              }}
            >
              <div className="containerss">
                <div className="card u-margin-bottom-medium">
                  <Link to={`/details/${id}`}>
                    {img.map(product => {
                      return (
                        <div className="imgBx">
                          <img
                            key={product.id}
                            className="img"
                            src={
                              process.env.REACT_APP_BACKEND_URL + product.url
                            }
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </Link>

                  <div className="contentBx">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/details/${id}`}
                    >
                      <h2 className="title">{title}</h2>
                    </Link>

                    <div className="price">
                      <h3>
                        Price: <span>{price}$</span>
                      </h3>
                    </div>

                    <ButtonContainer
                      cart
                      className="add"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        // value.openModal(id);
                        value.notify();
                      }}
                    >
                      {inCart ? "fixing" : "Fix it Now"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

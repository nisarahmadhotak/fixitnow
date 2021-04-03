import React from "react";
import { useParams } from "react-router-dom";
import Query from "../../components/Query";
import PRODUCT_QUERY from "../../queries/product/product";

import { ProductConsumer } from "../../contextapi";
import { Link } from "react-router-dom";
import ButtonContainer from "../ReusableComponents/Buttons/button";

const TempDetails = () => {
  let { id } = useParams();

  return (
    <Query query={PRODUCT_QUERY} id={id}>
      {({ data: { product } }) => {
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
                      <h1 className="text-blue">{product.title}</h1>
                    </div>
                  </div>
                  {/* end title  */}
                  {/* product info  */}
                  <div className="row">
                    <div className="col-10 col-md-6 mx-auto my-3">
                      <img
                        src={
                          process.env.REACT_APP_BACKEND_URL + product.img[0].url
                        }
                        alt="product"
                        className="img-fluid"
                      />
                    </div>
                    {/* product text */}
                    <div className="col-10 col-md-6  mx-auto my-3">
                      <h1 className="text-capitalize">
                        model: {product.title}
                      </h1>
                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by:{" "}
                        <span className="text-uppercase">
                          {product.company}
                        </span>
                      </h4>
                      <h4 className="text-blue">
                        <strong className="text-capitalize">
                          price: <span>$</span>
                          {product.price}
                        </strong>
                      </h4>
                      <p className="text-capitalize font-weight-bold mb-0 mt-3">
                        some info about the service:
                      </p>
                      <p className="text-muted lead">{product.info}</p>
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
                            value.notify();
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
        );
      }}
    </Query>
  );
};

export default TempDetails;

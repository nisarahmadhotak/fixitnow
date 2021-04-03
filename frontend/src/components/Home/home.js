import React, { useEffect } from "react";
import OwlCarousel from "../ReusableComponents/owlCarousel";
import AOS from "aos";
import ControlledCarousel from "../ReusableComponents/carousel";
import HomeBlog from "../Blog/homeBlog";
import "aos/dist/aos.css";
import { ProductConsumer } from "../../contextapi";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <React.Fragment>
      <ProductConsumer>
        {value => {
          return (
            <div>
              <ControlledCarousel />
              <OwlCarousel
                className="u-margin-top-small"
                values={value.currentProducts}
                value={value}
              />
              <HomeBlog />
            </div>
          );
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OwlCarousels({ value, values }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    AOS.init();
  });

  const responsive = {
    0: {
      items: 1
    },
    320: {
      items: 1
    },
    560: {
      items: 1
    },
    760: {
      items: 2
    },
    960: {
      items: 3
    }
  };
  return (
    <React.Fragment>
      {values.map(product => {
        return (
          <div style={{ display: "none" }} key={product.id}>
            {product.img.map(img => {
              return items.push(
                <div key={product.id} className="item carousel-container">
                  <div data-aos="fade-right" data-aos-delay="200">
                    <Link to={`/details/${product.id}`}>
                      <img
                        src={process.env.REACT_APP_BACKEND_URL + img.url}
                        alt="post-1"
                        className="img-owl-carousel"
                      />
                    </Link>

                    <div className="item-header">
                      <h3 className="header-tertiary-1">{product.title}</h3>
                      <h3 className="header-tertiary-2">
                        Price: {product.price}$
                      </h3>

                      <Link to="/shop">
                        <button className="btn btn-green-small-1 text-capitalize">
                          Check Services
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <OwlCarousel
        className="owl-theme"
        autoplay={true}
        autoplayTimeout={4000}
        autoplayHoverPause={true}
        responsive={responsive}
        dots={false}
        onRefresh={true}
        items={3}
        loop
      >
        {items}
      </OwlCarousel>
    </React.Fragment>
  );
}

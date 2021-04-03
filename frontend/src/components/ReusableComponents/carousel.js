import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      data-aos="zoom-in"
      data-aos-delay="200"
      // prevIcon={false}
      // nextIcon={false}
      // indicators={false}
    >
      <Carousel.Item>
        <picture>
          <source srcset="img/spa.jpg" type="image/jpg" />
          <img src="img/spa.jpg" alt="" className="img-carousel" />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source srcset="img/pestcontrol.jpg" type="image/jpg" />
          <img src="img/pestcontrol.jpg" alt="" className="img-carousel" />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source srcset="img/painter.jpg" type="image/jpg" />
          <img src="img/painter.jpg" alt="" className="img-carousel" />
        </picture>
      </Carousel.Item>
    </Carousel>
  );
}

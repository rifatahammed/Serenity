import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import one from "./../../../images/banner/1.jpg";
import two from "./../../../images/banner/2.jpg";
import three from "./../../../images/banner/3.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block  " src={one} alt="First slide" />
          <Carousel.Caption>
            <h3>Whats on your mind</h3>
            <p>Listen to your heart and mind</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  " src={two} alt="Second slide" />

          <Carousel.Caption>
            <h3>Share love </h3>
            <p>Spread love and good vibe and be happy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  " src={three} alt="Third slide" />

          <Carousel.Caption>
            <h3>Dont stuck in depression</h3>
            <p>We are always there to hear your words</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

import React, { Component } from 'react';
import Slider from 'react-slick';
import tempImage from '../images/camera-fpo.png';

class Carousel extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <div className="image-container">
          <Slider {...settings}>
            <div className="image">
              <img src={tempImage} />
            </div>
            <div className="image">
              <img src={tempImage} />
            </div>
            <div className="image">
              <img src={tempImage} />
            </div>
            <div className="image">
              <img src={tempImage} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;

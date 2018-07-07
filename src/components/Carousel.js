import React from 'react';
import Slider from 'react-slick';

const Carousel = (data) => {

  const images = data.images;

  const getImages = () => {
    let returnArray = [];
    for(let i in images){
      let image = require(`../images/cameras/${images[i]}`);
      let magnify = require('../images/magnify.png');
      let photoBackground = {
        backgroundImage: `url(${image})`
      };
      let magnifyBackground = {
        backgroundImage: `url(${magnify})`
      };
      returnArray.push(
        <div className="image" key={i}>
          <div style={photoBackground}>
            <a href={image} style={magnifyBackground} target={'_blank'}><img src={require(`../images/empty.png`)} alt='' /></a>
          </div>
        </div>
      );
    }
    return returnArray;
  }

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
          {getImages()}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;

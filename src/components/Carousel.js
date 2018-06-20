import React from 'react';
import Slider from 'react-slick';

const Carousel = (data) => {

  const images = data.images;

  const getImages = () => {
    let returnArray = [];
    for(let i in images){
      returnArray.push(<div className="image" key={i}><img src={require(`../images/cameras/${images[i]}`)} alt='' /></div>);
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

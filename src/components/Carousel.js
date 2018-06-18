import React, { Component } from 'react';
import Slider from 'react-slick';
import tempImage from '../images/camera-fpo.png';

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props.images
    }
  }
  getImages(){
    let images = this.state;
    console.log(images);
    let returnArray = [];
    for(let image in images){
      returnArray.push(<div className="image"><img src={require(`../images/cameras/${images[image]}`)} /></div>);
    }
    return returnArray;
  }
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
            {this.getImages()}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;

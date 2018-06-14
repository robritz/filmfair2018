import React, { Component } from 'react';
import Carousel from './Carousel';
import CameraData from './CameraData';
import CameraFeels from './CameraFeels';

class Camera extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...props.data
    }
  }

  render() {
    let data = this.state;
    return (
      <div className="camera">
        <h2>{data.name}</h2>
        <h3>{data.category}</h3>
        <Carousel />
        <CameraData data={data.data} />
        <CameraFeels feels={data.feels} />
        <div className="camera-notes">
          <p><strong>Notes:</strong> {data.notes}</p>
        </div>
      </div>
    );
  }
}

export default Camera;

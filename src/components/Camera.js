import React, { Component } from 'react';
import Carousel from './Carousel';
import CameraData from './CameraData';
import CameraFeels from './CameraFeels';

class Camera extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      cameraId: props.cameraId
    }
  }

  render() {
    let data = this.state.data;
    return (
      <div className={`camera c-${this.state.cameraId}`}>
        <h2>{data.name}</h2>
        <h3>{data.category}</h3>
        <Carousel images={data.images} />
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

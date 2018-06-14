import React, { Component } from 'react';

class CameraData extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props.data
    }
  }
  render() {
    let data = this.state;
    return (
      <div className="camera-data">
        <ul>
          <li className="type">{data.type}</li>
          <li className="film">{data.film}</li>
          <li className="iso">{data.iso}</li>
          <li className="lens">{data.lens}</li>
          <li className="age">{data.age}</li>
        </ul>
      </div>
    );
  }
}

export default CameraData;

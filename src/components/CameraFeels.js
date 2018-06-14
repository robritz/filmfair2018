import React, { Component } from 'react';
import Rating from './Rating';

class CameraFeels extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props.feels
    }
  }
  render() {
    let feels = this.state;
    return (
      <div className="camera-feels">
        <ul>
          <li><span>Joy to Use:</span><Rating score={feels.joy} /></li>
          <li><span>Ease of Use:</span><Rating score={feels.ease} /></li>
          <li><span>Uniqueness:</span><Rating score={feels.uniqueness} /></li>
          <li><span>Will Use Again:</span><Rating score={feels.again} /></li>
        </ul>
      </div>
    );
  }
}

export default CameraFeels;

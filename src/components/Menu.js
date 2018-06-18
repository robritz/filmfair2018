import React, { Component } from 'react';

const classNames = require('classnames');

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      cameras: props.cameraData,
      menuOption: -1
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getMenuItems(type){
    const cameras = this.state.cameras;
    let returnArray = [<option value="-1">{type}</option>];
    for(let i in cameras){
      let camera = cameras[i];
      returnArray.push(<option value={camera.id}>
        {(type == 'Camera') ? camera.name : camera.category}
      </option>);
    }
    return returnArray;
  }

  handleChange(e){
    const val = e.target.value;
    // const element = document.getElementByClassName(`c-${val}`);
    // element.scrollIntoView();
    this.setState({
      menuOption: val
    });
  }

  render() {

    const cameras = this.state;
    return (
      <div className='Menu'>
        <select className="cameras" onChange={this.handleChange} value={this.state.menuOption}>
          {this.getMenuItems('Camera')}
        </select>

        <select className="categories" onChange={this.handleChange} value={this.state.menuOption}>
          {this.getMenuItems('Category')}
        </select>
      </div>
    );
  }
}

export default Menu;

import React, { Component } from 'react';

const classNames = require('classnames');

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      isVisible: false
    }
  }

  handleItemClick(camera, e){
    e.preventDefault();
    this.toggleMenuVisible();
  }

  toggleMenuVisible(){
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {

    const {isVisible} = this.state;
    return (
      <div className='Menu'>
        <select className="cameras">
          <option>Camera</option>
          <option onClick={(e) => this.handleItemClick(0, e)}>Minolta Auto 35</option>
          <option onClick={(e) => this.handleItemClick(1, e)}>Yashica Mat124G</option>
          <option onClick={(e) => this.handleItemClick(2, e)}>Canon QL 17</option>
          <option>Minolta XD11</option>
          <option>Kodak Retina IIa</option>
          <option>Kodak Brownie Hawkeye Folding</option>
          <option>Minox B</option>
          <option>Canon AE1 Program</option>
          <option>Polaroid SX70</option>
          <option>Sears R35</option>
          <option>Pentax Point & Shoot</option>
          <option>Nikon A3000</option>
          <option>Minolta Maxxum 5</option>
        </select>

        <select className="categories">
          <option>Category</option>
          <option>Human Portrait B/W</option>
          <option>Human Portrait Color</option>
          <option>Animal Portrait B/W</option>
          <option>Animal Portrait Color</option>
          <option>Urban Landscape B/W</option>
          <option>Urban Landscape Color</option>
          <option>Nature Landscape B/W</option>
          <option>Nature Landscape Color</option>
          <option>Architecture B/W</option>
          <option>Architecture Color</option>
          <option>Storyboard B/W</option>
          <option>Storyboard Color</option>
          <option>Creative In-The-Moment</option>
          <option>Creative Photo Manipulation</option>
        </select>
      </div>
    );
  }
}

export default Menu;

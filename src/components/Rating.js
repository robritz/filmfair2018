import React, { Component } from 'react';

class Rating extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props
    }
  }

  getVisualScore(){
    let baseScore = this.state.score;
    let floating = String(baseScore).indexOf(".") > -1;
    let returnElements = [];

    if(floating){
      const scoreArray = String(baseScore).split(".");
      baseScore = scoreArray[0];
    }

    for(let i = 0; i < baseScore; i++){
      returnElements.push(<li><span>&nbsp;</span></li>);
    }

    if(floating){
      returnElements.push(<li className="half"><span>&nbsp;</span></li>);
    }

    return returnElements;
  }
  
  render() {
    return (
      <ul className="rating">
        {this.getVisualScore()}
      </ul>
    );
  }
}

export default Rating;

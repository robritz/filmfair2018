import React from 'react';

const Rating = (data) => {
  const score = data.score;

  const getVisualScore = () => {
    let baseScore = score;
    let floating = String(baseScore).indexOf(".") > -1;
    let returnElements = [];

    if(floating){
      const scoreArray = String(baseScore).split(".");
      baseScore = scoreArray[0];
    }

    for(let i = 0; i < baseScore; i++){
      returnElements.push(<li key={i}><span>&nbsp;</span></li>);
    }

    if(floating){
      returnElements.push(<li key={10} className="half"><span>&nbsp;</span></li>);
    }

    return returnElements;
  }

  return (
    <ul className="rating">
      {getVisualScore()}
    </ul>
  );
}

export default Rating;

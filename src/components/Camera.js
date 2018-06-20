import React from 'react';
import Carousel from './Carousel';
import CameraData from './CameraData';
import CameraFeels from './CameraFeels';

const Camera = ({data, id}) => {
  return (
    <div className={`camera c-${id}`}>
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

export default Camera;

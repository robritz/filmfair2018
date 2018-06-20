import React from 'react';

const CameraData = (data) => {
  const cameraData = data.data;

  return (
    <div className="camera-data">
      <ul>
        <li className="type">{cameraData.type}</li>
        <li className="film">{cameraData.film}</li>
        <li className="iso">{cameraData.iso}</li>
        <li className="lens">{cameraData.lens}</li>
        <li className="age">{cameraData.age}</li>
      </ul>
    </div>
  );
}

export default CameraData;

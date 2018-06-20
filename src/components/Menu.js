import React from 'react';

let Menu = ({cameras, cameraId, selectCamera}) => {

  const menuTitles = {
    cameras: 'All Cameras',
    categories: 'All Categories'
  }

  let getMenuItems = (type) => {
    let returnArray = [<option value="-1" key={-1}>{type}</option>];
    for(let i in cameras){
      let camera = cameras[i];
      returnArray.push(<option value={camera.id} key={camera.id}>
        {(type === menuTitles.cameras) ? camera.name : camera.category}
      </option>);
    }
    return returnArray;
  }

  let handleChange = (e) => {
    selectCamera(e.target.value);
  }

  return (
    <div className='Menu'>
      <select className="cameras" onChange={handleChange} value={cameraId}>
        {getMenuItems(menuTitles.cameras)}
      </select>

      <select className="categories" onChange={handleChange} value={cameraId}>
        {getMenuItems(menuTitles.categories)}
      </select>
    </div>
  );
}

export default Menu;

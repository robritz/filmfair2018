import React from 'react';
import ReactDOM from 'react-dom';

import MenuContainer from './containers/MenuContainer';
import Camera from './components/Camera';

import logo from './images/logo.png';

const App = ({cameras, cameraId}) => {
  let footerRef = React.createRef();

  const getCameras = () => {
    let cameraArray = [];
    if(cameraId > -1){
      let camera = cameras.find((cam) => {
        return cam.id == cameraId;
      });
      return <Camera cameraId={camera.id} data={camera} />;
    }else{
      for(let i in cameras){
        let camera = cameras[i];
        cameraArray.push(<Camera cameraId={camera.id} data={camera} key={i} />);
      }
    }

    return cameraArray;
  }

  const goToAbout = () => {
    var node = ReactDOM.findDOMNode(footerRef.current);
    node.classList.toggle('open');
  }

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="header">
          <MenuContainer />
          <img src={logo} className="logo" alt="logo" />
        </div>
        {getCameras()}
        <div className={`footer`} ref={footerRef}>
          <span className="about" onClick={goToAbout}><span className="close-arrow">&laquo; </span>About this Project<span className="open-arrow"> &raquo;</span></span>
          <span className="copyright">&copy; 2018 Rob Ritzenhein</span>
          <div className="about-copy">
            <p>Hello!</p>
            <p>This project focusses on two experiences: Photographing work to show at the <a href="http://oakfair.org" target="_blank">2018 Oakland County Fair</a> (OCF), and experiencing the nuances of multiple film cameras spanning the 20th century.</p>
            <p>Each camera was used to shoot a unique photo within one or two categories. These categories are determined by the available photographic categories within the adult exhibitions at the OCF. The goal was to shoot one photo with one camera, although in some cases that proved to be impractical.</p>
            <p>As the project progressed, it was clear it was no longer about taking the best images but experiencing each camera as a photographic instrument. Finding out what it may have been like to take pictures in the time the camera was made. The outcome became a part of the process instead of the goal.</p>
            <p>If you'd like to see more of my work, please check out my <a href="http://robritz.com" target="_blank">website</a> and <a href="http://flickr.com/photos/robritz" target="_blank">Flickr</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;

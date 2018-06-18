import React, { Component } from 'react';
import Menu from './components/Menu';
import Camera from './components/Camera';

import logo from './images/logo.png';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cameras: props.data
    }
  }

  getCameras(cameras){
    return this.state.cameras.map((camera, index) =>{
      return <Camera cameraId={camera.id} data={camera} />;
    });
  }

  goToAbout(){
    console.log('show about');
  }

  render() {
    return (
      <div className="App">
        <div className="app-wrapper">
          <div className="header">
            <Menu cameraData={this.state.cameras} />
            <img src={logo} className="logo" alt="logo" />
          </div>
          {this.getCameras()}
          <div className="footer">
            <span className="about" onClick={this.goToAbout}>About this Project &raquo;</span>
            <span className="copyright">&copy; 2018 Rob Ritzenhein</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

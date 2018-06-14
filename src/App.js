import React, { Component } from 'react';
import Menu from './components/Menu';
import Camera from './components/Camera';

import axios from 'axios';

import logo from './images/logo.png';



class App extends Component {

  constructor(){
    super();
    this.state = {
      cameras: ['']
    }
    this.fetchData();
  }

  getAPIUrl(endpoint = 'getCameras'){
    return (window.location.href.indexOf("localhost") > -1) ? `http://localhost:5000/${endpoint}` : `http://film-fair-2018.firebaseapp.com/${endpoint}`;
  }

  fetchData(){
    axios.get(this.getAPIUrl())
      .then(res => {
        this.setState({cameras: res.data});
      })
      .catch(error =>{
        console.error(error);
      })
  }

  getCameras(cameras){
    if(cameras.length > 1){
      return cameras.map((camera, index) =>{
        return <Camera key={index} data={camera} />;
      });
    }
  }

  goToAbout(){
    console.log('show about');
  }

  render() {
    let cameras = this.state.cameras;
    return (
      <div className="App">
        <div className="app-wrapper">
          <div className="header">
            <Menu />
            <img src={logo} className="logo" alt="logo" />
          </div>
          {this.getCameras(cameras)}
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

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './scss/main.scss';

function getAPIUrl(endpoint = 'getCameras'){
  return (window.location.href.indexOf("localhost") > -1) ? `http://localhost:5000/${endpoint}` : `http://film-fair-2018.firebaseapp.com/${endpoint}`;
}

axios.get(getAPIUrl())
  .then(res => {
    ReactDOM.render(<App data={res.data} />, document.getElementById('root'));
    registerServiceWorker();
  })
  .catch(error =>{
    console.error(error);
  })

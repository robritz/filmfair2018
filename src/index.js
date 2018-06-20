import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import './scss/main.scss';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import selectCamera from './reducers/selectCamera';

function getAPIUrl(endpoint = 'getCameras'){
  return `http://film-fair-2018.firebaseapp.com/${endpoint}`;
}

axios.get(getAPIUrl())
  .then(res => {
    let store = createStore(selectCamera, {cameras:res.data, cameraId: -1}); 
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>
      , document.getElementById('root'));
    registerServiceWorker();
  })
  .catch(error =>{
    console.error(error);
  })

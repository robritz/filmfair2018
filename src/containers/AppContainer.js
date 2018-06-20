import App from '../App';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      cameras: state.cameras,
      cameraId: state.cameraId
    }
}

let AppContainer = connect(mapStateToProps)(App);

export default AppContainer;

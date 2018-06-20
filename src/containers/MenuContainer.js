import Menu from '../components/Menu';
import { connect } from 'react-redux';
import { selectCamera } from '../actions';

const mapStateToProps = (state) => {
    return {
      cameras: state.cameras,
      cameraId: state.cameraId
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCamera: (cameraId) => {
      dispatch(selectCamera(cameraId))
    }
  }
}

let MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;

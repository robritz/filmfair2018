const selectCamera = (state = {}, action) => {
  switch(action.type){
    case 'SELECT_CAMERA':
      return {...state, cameraId: action.cameraId};
    default:
      return state;
  }
}

export default selectCamera;

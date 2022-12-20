import {GET_USER} from '../action/Action';

const initialState = {
  user: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
}

export default userReducer;

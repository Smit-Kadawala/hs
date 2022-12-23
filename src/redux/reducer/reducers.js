import {GET_USER, GET_USER_SM} from '../action/Action';

const initialState = {
  user: [],
  usersm: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.payload};
    case GET_USER_SM:
      return {...state, usersm: action.payload};
    default:
      return state;
  }
}

export default userReducer;

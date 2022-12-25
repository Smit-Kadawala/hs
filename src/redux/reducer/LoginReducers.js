import {GET_USER, GET_USER_SM} from '../type/type';

const initialState = {
  AllUser: [],
};

function LoginReducers(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, AllUser: action.payload};
    default:
      return state;
  }
}

export default LoginReducers;

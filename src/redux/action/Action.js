import {getRequestApi} from '../servicemanager/ServiceManager';

export const GET_USER = 'GET_USER';
export const GET_USER_SM = 'GET_USER_SM';

const API_URL = 'http://192.168.0.108:8080/api/user';

export const getUser = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_USER,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getUserfromSm = url => {
  return dispatch => getRequestApi({url, dispatch, actionType: GET_USER_SM});
};

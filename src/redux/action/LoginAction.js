import {GET_USER} from '../type/type';
import {GET_USER_API} from '../url/url';
import {getRequestApi} from '../servicemanager/ServiceManager';

export const getAllUser = () => {
  return dispatch =>
    getRequestApi({url: GET_USER_API, dispatch, actionType: GET_USER});
};

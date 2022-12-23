import axios from 'axios';

export const configHeader = () => {
  console.log('configHeader');
  return (header = {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getRequestApi = ({url, dispatch, actionType}) => {
  console.log('getRequestApiSm');
  let headers = configHeader();
  return axios
    .get(url, headers)
    .then(response => {
      dispatch({type: actionType, payload: response});
    })
    .catch(error => console.log(error));
};

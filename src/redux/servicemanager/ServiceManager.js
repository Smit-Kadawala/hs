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
  let headers = configHeader();

  console.log(
    url,
    'url-------------------------',
    headers,
    'headers----------------',
  );
  return axios({
    method: 'get',
    url: url,
    header: headers,
  })
    .then(function (r) {
      // console.log('response', JSON.stringify(r.data));
      dispatch({
        type: actionType,
        payload: r.data,
      });
    })
    .catch(function (e) {
      console.log('error', e);
    });
};

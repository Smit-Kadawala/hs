import axios from 'axios';

export const configHeader = () => {
  return (header = {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getRequestApi = ({url, dispatch, actionType}) => {
  let headers = configHeader();

  console.log('============Url=====', url, headers);

  return axios
    .get(url, headers)
    .then(ErrorUtils.checkStatus)
    .then(response => {
      if (screenName && loaderToken) {
        incrementCallCount(screenName, loaderToken);
      }
      dispatch({type: actionType, payload: response});
    })
    .catch(error => {
      if (screenName && loaderToken) {
        incrementCallCount(screenName, loaderToken, false);
        // dispatch({ type: STOP_LOADER, payload: error });
      }
      if (isFailRecursive) {
        if (isNonActionCall && !axios.isCancel(error)) {
          // dispatch({ type: STOP_LOADER, payload: error });
          dispatch({type: actionTypeFail, payload: error});
          !isSilent ? errorAlert(error, true) : '';
        }
        clearTimeout(clearRecursionTimeout[recursionName]);
        clearRecursionTimeout[recursionName] = setTimeout(() => {
          getRequestApi({
            url,
            dispatch,
            actionType,
            screenName,
            loaderToken,
            startLoader,
            actionTypeFail,
            isSilent,
            isFailRecursive,
            recursionName,
          });
        }, API_TIMEOUT);
      } else {
        if (!axios.isCancel(error)) {
          // dispatch({ type: STOP_LOADER, payload: error });
          dispatch({type: actionTypeFail, payload: error});
          !isSilent ? errorAlert(error, true) : '';
        }
      }
      if (process.env.NODE_ENV == 'development') {
        console.log(JSON.stringify(error));
      } else if (process.env.NODE_ENV == 'test') {
        console.log(error);
      }
    });
};

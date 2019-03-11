import APIEndpoints from '../myConfig/APIEndpoints';

export const fetchMix = () => {
  // returns a function that dispatches an action with data to the redux store
  return dispatch => {
    dispatch({ type: 'START_FETCH_MIX' });
    return fetch(APIEndpoints.GET_NEW_MIX)
      .then(res => res.json())
      .then(data => {
        return dispatch({
          type: 'FETCH_MIX',
          payload: data,
        });
      })
      .catch(error => console.error('ERROR', error));
  };
};

export const fetchMixSearch = (text) => {
  let request = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(text)
  };
  return dispatch => {
    dispatch({ type: 'START_FETCH_MIX' });
    return fetch(APIEndpoints.NEW_MIX, request)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'FETCH_MIX',
          payload: data,
        });
      })
      .catch(error => console.error(error));
  };
};

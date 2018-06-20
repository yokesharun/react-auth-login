
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const setValidationFalse = (data) => {
	console.log('calling setValidationFalse');

  return {
    type: LOGIN_FAILED,
    data,
  };
}

export const setValidationTrue = (data) => {
	console.log('calling setValidationTrue');
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}
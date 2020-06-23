// const LOGGING_IN = 'LOGGING_IN';
const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
const AUTH_LOGIN_FAILURE = "AUTH_LOGIN_FAILURE";
const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const AUTH_REDIRECT_REFERRER = "AUTH_REDIRECT_REFERRER";

export const onLoginFailure = () => (dispatch) => {
  dispatch({
    type: AUTH_LOGIN_FAILURE,
  });
};

export const onLoginRequest = (data) => (dispatch) => {
  dispatch({
    type: AUTH_LOGIN_REQUEST,
    payload: data,
  });
};

export const onLoginSuccess = (data) => (dispatch) => {
  dispatch({
    type: AUTH_LOGIN_SUCCESS,
    payload: data,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
};

export const redirectReferrer = (data) => (dispatch) => {
  dispatch({
    type: AUTH_REDIRECT_REFERRER,
    payload: data,
  });
};

const initialState = {
  loggingIn: false,
  token: null,
  redirectToReferrer: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, loggingIn: action.payload };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, loggingIn: false, token: action.payload };
    case AUTH_REDIRECT_REFERRER:
      return { ...state, redirectToReferrer: action.payload };
    case AUTH_LOGIN_FAILURE:
    case AUTH_LOGOUT:
      return { ...state, loggingIn: false, token: null };
    default:
      return state;
  }
};

export default AuthReducer;

import { userConst } from '../actions/types';

const initialState = {
  name: null,
  email: null,
  isLoading: false,
  token: null,
};

const userReducer = (state = initialState, { payload, type }) => {
  console.log(payload);
  let response = null;

  switch (type) {
    case userConst.LOADING_USER:
      response = {
        ...state,
        isLoading: true,
      };
      break;
    case userConst.USER_LOADED:
      response = {
        ...state,
        isLoading: false,
      };
      break;
    case userConst.USER_LOGGED_IN:
      response = {
        ...state,
        name: payload.name,
        email: payload.email,
        token: payload.token,
      };
      break;
    case userConst.USER_LOGGED_OUT:
      response = {
        ...state,
        name: null,
        email: null,
      };
      break;
    default:
      response = state;
      break;
  }
  return response;
};

export default userReducer;

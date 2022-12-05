import getInstance from '../../mechanism/google-auth';
import getInstanceData from '../../api/index-config';
import { userConst } from './types';
const API_KEY = 'AIzaSyCha_yrUE_L7i6k5o3ASJBGMJ_0Ne57-bA';

export const create = (user) => {
  return async (dispatch) => {
    let response = null;
    try {
      const instance = getInstance();
      const { data } = await instance.post(`/signupNewUser?key=${API_KEY}`, {
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      });

      if (data.localId) {
        const instance = getInstanceData();
        await instance.put(`/users/${data.localId}.json`, {
          name: user.name,
        });
      }
      response = data;
    } catch (err) {
      throw new err();
    }

    dispatch(login(user));
  };
};

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loadingUser());

    try {
      const instance = getInstance();
      const { data } = await instance.post(`/verifyPassword?key=${API_KEY}`, {
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      });

      if (data.localId) {
        const instance = getInstanceData();
        const response = await instance.get(`/users/${data.localId}.json`);

        delete user.password;
        user.name = response.data.name;
        dispatch(userLogged(user));
        dispatch(userLoaded());
      }
    } catch (err) {
      console.log(err);
      throw new err();
    }
  };
};

export const userLogged = (user) => {
  return {
    type: userConst.USER_LOGGED_IN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: userConst.USER_LOGGED_OUT,
  };
};
export const loadingUser = () => {
  return {
    type: userConst.LOADING_USER,
  };
};

export const userLoaded = () => {
  return {
    type: userConst.USER_LOADED,
  };
};

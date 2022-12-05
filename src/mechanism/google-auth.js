import axios from 'axios';

const getInstance = () => {
  const token = 'AIzaSyCha_yrUE_L7i6k5o3ASJBGMJ_0Ne57-bA';
  const instance = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
    },
  });

  return instance;
};

export default getInstance;

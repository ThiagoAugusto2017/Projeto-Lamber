import axios from 'axios';

const getInstance = (token) => {
  const instance = axios.create({
    baseURL: 'https://lamber-dd8e1-default-rtdb.firebaseio.com',
    // timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      //   api_key: getEnv().apiKey,
    },
  });

  if (token) {
    instance.interceptors.request.use(function (config) {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    });
  }
  return instance;
};

export default getInstance;

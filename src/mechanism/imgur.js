import axios from 'axios';

const getInstance = () => {
  const token = 'c6b15d110d73620';
  const instance = axios.create({
    baseURL: 'https://api.imgur.com/3/image',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      Authorization: `Client-ID ${token}`,
    },
  });

  return instance;
};

async function uploadImage(image) {
  let response = null;
  try {
    const instance = getInstance();
    const { data } = await instance.post('', image);
    response = data.data.link;
  } catch (err) {
    throw new err();
  }
  return await response;
}

export default uploadImage;

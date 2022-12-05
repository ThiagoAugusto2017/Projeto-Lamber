import getInstance from '../../api/index-config';
import uploadImage from '../../mechanism/imgur';

import { PostsConst } from './types';

export const addPost = (params, getState) => {
  return async (dispatch) => {
    dispatch(creatingPost());

    try {
      const image = await uploadImage(params.image.base64);
      params.image = image;

      const instance = getInstance();
      await instance.post('/posts.json', { ...params });
    } catch (err) {
      throw new err();
    }

    dispatch(fetchPosts());
    dispatch(postCreated());
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    let response = null;
    try {
      const instance = getInstance();
      const { data } = await instance.get('/posts.json');

      response = data;
    } catch (err) {
      throw new err();
    }
    const rawPosts = response;
    const posts = [];
    for (let key in rawPosts) {
      posts.push({
        ...rawPosts[key],
        id: key,
      });
    }
    dispatch(setPosts(posts.reverse()));
  };
};

export const addComment = (payload) => {
  return async (dispatch) => {
    try {
      const instance = getInstance();
      const { data } = await instance.get(`/posts/${payload.id}.json`);
      let commentGet = data.comments || [];
      commentGet.push(payload.comments);

      await instance.patch(`/posts/${payload.id}.json`, {
        comments: commentGet,
      });
    } catch (err) {
      throw new err();
    }

    dispatch(fetchPosts());
  };
};

export const creatingPost = () => {
  return {
    type: PostsConst.CREATING_POST,
  };
};

export const postCreated = () => {
  return {
    type: PostsConst.POST_CREATED,
  };
};

export const setPosts = (posts) => {
  return {
    type: PostsConst.SET_POSTS,
    payload: posts,
  };
};

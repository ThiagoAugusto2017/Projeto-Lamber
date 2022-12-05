import { PostsConst } from '../actions/types';
const initialState = {
  posts: [],
  isUploading: false,
};

const postsReducer = (state = initialState, { payload, type }) => {
  let response = null;

  switch (type) {
    case PostsConst.CREATING_POST:
      response = {
        ...state,
        isUploading: true,
      };
      break;

    case PostsConst.POST_CREATED:
      response = {
        ...state,
        isUploading: false,
      };
      break;

    case PostsConst.SET_POSTS:
      response = {
        ...state,
        posts: payload,
      };
      break;

    case PostsConst.ADD_COMMENT:
      response = {
        ...state,
        posts: payload,
        // posts: state.posts.map((post) => {
        //   if (post.id === payload.id) {
        //     if (post.comments) {
        //       post.comments = post.comments.concat(payload.comments);
        //     } else {
        //       post.comments = [payload.comments];
        //     }
        //   }
        //   return post;
        // }),
      };

      break;

    default:
      response = state;
      break;
  }
  return response;
};

export default postsReducer;

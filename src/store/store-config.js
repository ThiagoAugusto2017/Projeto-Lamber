import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import messageReducer from './reducer/message';
import postsReducer from './reducer/posts';
import userReducer from './reducer/user';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  message: messageReducer,
});

const storeConfig = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default storeConfig;

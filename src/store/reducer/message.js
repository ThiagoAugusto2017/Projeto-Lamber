import { MessageConst } from '../actions/types';

const initialState = {
  title: '',
  text: '',
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MessageConst.SET_MESSAGE:
      return {
        ...state,
        title: action.payload.title,
        text: action.payload.text,
      };
    default:
      return state;
  }
};

export default messageReducer;

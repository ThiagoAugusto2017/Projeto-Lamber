import { MessageConst } from './types';

export const setMessage = (message) => {
  return {
    type: MessageConst.SET_MESSAGE,
    payload: message,
  };
};

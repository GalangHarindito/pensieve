import { ACCESS_TOKEN } from './types';

export const accessToken = (
  state = '',
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case ACCESS_TOKEN:
      return payload;
    default:
      return state;
  }
};
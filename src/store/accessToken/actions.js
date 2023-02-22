import { ACCESS_TOKEN } from './types';

export const setAccessToken = (payload) => {
  return { type: ACCESS_TOKEN, payload };
};

import { mockedResponse } from './mockedResponse.js';

export function apiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedResponse);
    }, 500);
  });
}

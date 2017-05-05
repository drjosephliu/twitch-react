import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';

export function fetchUser(user) {
  console.log('Request made', user);
  return {
    type: FETCH_USER,
    payload: user
  }
}

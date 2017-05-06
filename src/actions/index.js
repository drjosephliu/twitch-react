import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const HAS_ERRORED = 'HAS_ERRORED';
export const SELECTED_USER = 'SELECTED_USER';
export const SHOW_ONLINE = 'SHOW_ONLINE';
export const SHOW_OFFLINE = 'SHOW_OFFLINE';
export const SHOW_ALL = 'SHOW_ALL';

const ROOT_URL = 'https://wind-bow.glitch.me/twitch-api/';

export function fetchUser(user) {
  const channelUrl = `${ROOT_URL}/channels/${user}`;
  const streamUrl = `${ROOT_URL}/streams/${user}`;

  const request = axios.all([
    axios.get(channelUrl),
    axios.get(streamUrl)
  ]);

  return (dispatch) => {
    request.then(axios.spread((channelData, streamData) => {
      var channelData = channelData.data;
      var streamData = streamData.data;

      if (channelData.error) {
        dispatch(hasErrored(channelData.message));
      }
      else {
        dispatch({
          type: FETCH_USER,
          payload: { channelData, streamData }
        });
        dispatch(hasErrored(null));
      }
    }));
  }
}

export function hasErrored(msg) {
  return {
    type: HAS_ERRORED,
    msg
  }
}

export function selectUser(user) {
  return (dispatch) => {
    dispatch(hasErrored(null));
    dispatch({
      type: SELECTED_USER,
      user
    });
  }
}

export function showOnline() {
  return {
    type: SHOW_ONLINE
  }
}

export function showOffline() {
  return {
    type: SHOW_OFFLINE
  }
}

export function showAll() {
  return {
    type: SHOW_ALL
  }
}

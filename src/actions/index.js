import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const HAS_ERRORED = 'HAS_ERRORED';
export const SELECTED_USER = 'SELECTED_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS';

const ROOT_URL = 'https://api.twitch.tv/kraken/';
const CLIENT_ID = 'dodzc4a28o42j2p4orh98a75e84uax';

export function fetchUser(user) {
  const channelUrl = `${ROOT_URL}/channels/${user}?client_id=${CLIENT_ID}&callback=`;
  const streamUrl = `${ROOT_URL}/streams/${user}?client_id=${CLIENT_ID}&callback=`;

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

export function removeUser(user) {
  return {
    type: REMOVE_USER,
    user
  }
}

export function searchUser(term) {
  const channelUrl = `${ROOT_URL}/search/channels/?q=${term}&client_id=${CLIENT_ID}`;

  return axios.get(channelUrl);
}

export function fetchSuggestions(term) {
  return (dispatch) => {
    searchUser(term).then((response) => {
      const channels = response.data.channels;
      dispatch({
        type: FETCH_SUGGESTIONS,
        channels
      });
    });
  }
}

import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const HAS_ERRORED = 'HAS_ERRORED';

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

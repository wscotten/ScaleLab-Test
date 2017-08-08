import { GET_CHANNEL_INFO } from './constants';

export const getChannelInfo = payload => ({
  type: GET_CHANNEL_INFO,
  payload,
});

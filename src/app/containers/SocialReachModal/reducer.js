import { GET_CHANNEL_INFO } from '../../components/ChannelBaseInfo/constants';
import { extractSocialReachNumbers } from '../../components/ChannelDetails/reducer';

export const UPDATE_SOCIAL_REACH_MODAL = 'UPDATE_SOCIAL_REACH_MODAL';
export const DONT_UPDATE = 'DONT_UPDATE';

export const updateSocialReachModal = (platform, value) => {
  if (isNaN(value) || value < 0 || value.length > 10) return { type: DONT_UPDATE };
  const payload = { [platform]: Number(value) };
  return {
    type: UPDATE_SOCIAL_REACH_MODAL,
    payload,
  };
};

const socialReachModalReducer = (socialReachModalValues = {}, { type, payload }) => {
  switch (type) {
    case GET_CHANNEL_INFO:
      return extractSocialReachNumbers(payload);
    case UPDATE_SOCIAL_REACH_MODAL:
      return Object.assign({}, socialReachModalValues, payload);
    default:
      return socialReachModalValues;
  }
};

export default socialReachModalReducer;

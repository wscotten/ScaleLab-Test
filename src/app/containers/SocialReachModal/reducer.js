import { UPDATE_SOCIAL_REACH_MODAL } from './constants';
import { GET_CHANNEL_INFO } from '../../components/ChannelBaseInfo/constants';
import { extractSocialReachNumbers } from '../../components/ChannelDetails/reducer';

const initialData = {
  total: 0,
  Youtube: 0,
  Facebook: 0,
  Vine: 0,
  Twitter: 0,
  Instagram: 0,
};

const socialReachModalReducer = (socialReachModalValues = initialData, { type, payload }) => {
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

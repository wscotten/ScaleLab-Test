import { GET_CHANNEL_INFO } from '../ChannelBaseInfo/constants';
import { PUT_SOCIAL_REACH_INFO_SUCCESS } from '../../containers/SocialReachModalButton/constants';

const initialData = {
  ageGroups: {
    13: 0,
    18: 0,
    25: 0,
    35: 0,
    45: 0,
    55: 0,
  },
  genders: {
    male: 0,
    female: 0,
  },
  socialReach: {
    total: 0,
    Youtube: 0,
    Facebook: 0,
    Vine: 0,
    Twitter: 0,
    Instagram: 0,
  },
  earnings: [
    {
      id: 0,
      channel_id: 0,
      year: 0,
      month: 0,
      gross: 0,
    },
  ],
};

const channelDetailsReducer = (data = initialData, { type, payload }) => {
  switch (type) {
    case GET_CHANNEL_INFO:
      return payload.channelDetails;
    case PUT_SOCIAL_REACH_INFO_SUCCESS:
      return { ...data, socialReach: payload };
    default:
      return data;
  }
};

export default channelDetailsReducer;

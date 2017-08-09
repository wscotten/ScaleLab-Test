import { GET_CHANNEL_INFO } from '../ChannelBaseInfo/constants';
import { PUT_SOCIAL_REACH_INFO_SUCCESS } from '../../containers/SocialReachModalButton/constants';
import { MONTHS_TO_SHOW } from '../ChannelDetails';

export const extractSocialReachNumbers = payload => ({
  total: payload.channelStats.social_reach,
  Youtube: payload.channelStats.youtube_reach,
  Facebook: payload.channelStats.facebook_reach,
  Vine: payload.channelStats.vine_reach,
  Twitter: payload.channelStats.twitter_reach,
  Instagram: payload.channelStats.instagram_reach,
});

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
      return {
        ageGroups: JSON.parse(payload.channelStats.age_groups),
        genders: {
          male: payload.channelStats.male_ratio,
          female: payload.channelStats.female_ratio,
        },
        socialReach: extractSocialReachNumbers(payload),
        earnings: payload.earnings.slice(payload.earnings.length - MONTHS_TO_SHOW),
      };
    case PUT_SOCIAL_REACH_INFO_SUCCESS:
      return { ...data, socialReach: payload };
    default:
      return data;
  }
};

export default channelDetailsReducer;

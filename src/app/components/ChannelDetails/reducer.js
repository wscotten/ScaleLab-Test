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

const channelDetailsReducer = (data = {}, { type, payload }) => {
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
      return Object.assign({}, data, { socialReach: payload });
    default:
      return data;
  }
};

export default channelDetailsReducer;

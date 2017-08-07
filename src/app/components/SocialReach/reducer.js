import { PUT_SOCIAL_REACH_INFO_SUCCESS } from '../../containers/SocialReachModalButton/reducer';

export const GET_CHANNEL_INFO = 'GET_CHANNEL_INFO';

export const extractSocialReachNumbers = payload => ({
  total: payload.channelStats.social_reach,
  Youtube: payload.channelStats.youtube_reach,
  Facebook: payload.channelStats.facebook_reach,
  Vine: payload.channelStats.vine_reach,
  Twitter: payload.channelStats.twitter_reach,
  Instagram: payload.channelStats.instagram_reach,
});

const ageGroupsReducer = (socialReach = {}, { type, payload }) => {
  switch (type) {
    case GET_CHANNEL_INFO:
      return extractSocialReachNumbers(payload);
    case PUT_SOCIAL_REACH_INFO_SUCCESS:
      return payload;
    default:
      return socialReach;
  }
};

export default ageGroupsReducer;

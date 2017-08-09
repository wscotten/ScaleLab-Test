import { GET_CHANNEL_INFO } from './constants';
import { MONTHS_TO_SHOW } from '../ChannelDetails';

export const extractChannelBaseInfo = ({ channels, channelStats }) => ({
  name: channels.name,
  status: channels.status,
  youtube_channel_id: channels.youtube_channel_id,
  total_views: channelStats.total_views,
  subscribers: channelStats.subscribers,
  videos: channelStats.videos,
  last_month_views: channelStats.last_month_views,
  network: channels.network,
  joined_at: channels.joined_at,
  owner: channels.owner,
  category: channels.category,
  commission: channels.commission,
  country_id: channels.country_id,
});

export const extractChannelDetails = ({ channelStats, earnings }) => ({
  ageGroups: JSON.parse(channelStats.age_groups),
  genders: {
    male: channelStats.male_ratio,
    female: channelStats.female_ratio,
  },
  socialReach: {
    total: channelStats.social_reach,
    Youtube: channelStats.youtube_reach,
    Facebook: channelStats.facebook_reach,
    Vine: channelStats.vine_reach,
    Twitter: channelStats.twitter_reach,
    Instagram: channelStats.instagram_reach,
  },
  earnings: earnings.slice(earnings.length - MONTHS_TO_SHOW),
});

export const getChannelInfo = payload => ({
  type: GET_CHANNEL_INFO,
  payload: {
    channelBaseInfo: extractChannelBaseInfo(payload),
    channelDetails: extractChannelDetails(payload),
  },
});

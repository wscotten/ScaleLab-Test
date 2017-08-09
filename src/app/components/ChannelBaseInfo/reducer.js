import { GET_CHANNEL_INFO } from './constants';

const initialData = {
  name: '',
  status: 'linked',
  youtube_channel_id: '',
  total_views: 0,
  subscribers: 0,
  videos: 0,
  last_month_views: 0,
  network: '',
  joined_at: '',
  owner: '',
  category: '',
  commission: 0,
  country_id: '',
};

const channelBaseInfoReducer = (data = initialData, { type, payload = {} }) => {
  const { channels, channelStats } = payload;
  switch (type) {
    case GET_CHANNEL_INFO:
      return {
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
      };
    default:
      return data;
  }
};

export default channelBaseInfoReducer;

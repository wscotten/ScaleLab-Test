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
  switch (type) {
    case GET_CHANNEL_INFO:
      return payload.channelBaseInfo;
    default:
      return data;
  }
};

export default channelBaseInfoReducer;

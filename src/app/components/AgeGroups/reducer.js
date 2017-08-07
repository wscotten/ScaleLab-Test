import { GET_CHANNEL_INFO } from '../ChannelBaseInfo/reducer';

const ageGroupsReducer = (data = {}, { type, payload }) => {
  switch (type) {
    case GET_CHANNEL_INFO:
      return JSON.parse(payload.channelStats.age_groups);
    default:
      return data;
  }
};

export default ageGroupsReducer;

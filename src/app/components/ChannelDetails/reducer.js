import { GET_CHANNEL_INFO } from '../ChannelBaseInfo/reducer';

const channelDetailsReducer = (data = {}, { type, payload }) => {
  switch (type) {
    case GET_CHANNEL_INFO:
      return {
        ageGroups: JSON.parse(payload.channelStats.age_groups),
        genders: {
          male: payload.channelStats.male_ratio,
          female: payload.channelStats.female_ratio,
        },
      };
    default:
      return data;
  }
};

export default channelDetailsReducer;

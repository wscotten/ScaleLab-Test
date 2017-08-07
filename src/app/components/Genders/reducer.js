import { GET_CHANNEL_INFO } from '../ChannelBaseInfo/reducer';

const gendersReducer = (genders = {}, { type, payload }) => {
  switch (type) {
    case GET_CHANNEL_INFO:
      return {
        male: payload.channelStats.male_ratio,
        female: payload.channelStats.female_ratio,
      };
    default:
      return genders;
  }
};

export default gendersReducer;

import { GET_CHANNEL_INFO } from '../ChannelBaseInfo/reducer';
import { MONTHS_TO_SHOW } from '../ChannelDetails';


const earningsReducer = (earnings = [], { type, payload }) => {
  switch (type) {
    case GET_CHANNEL_INFO:
      return payload.earnings.slice(payload.earnings.length - MONTHS_TO_SHOW);
    default:
      return earnings;
  }
};

export default earningsReducer;

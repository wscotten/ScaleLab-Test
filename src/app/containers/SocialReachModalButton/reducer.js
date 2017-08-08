import {
  CURRENTLY_ATTEMPTING_PUT,
  PUT_SOCIAL_REACH_INFO_SUCCESS,
  PUT_SOCIAL_REACH_INFO_FAIL,
} from './constants';

const socialReachModalButtonReducer = (attemptingSocialReachPut = false, { type }) => {
  switch (type) {
    case CURRENTLY_ATTEMPTING_PUT:
      return true;
    case PUT_SOCIAL_REACH_INFO_FAIL:
    case PUT_SOCIAL_REACH_INFO_SUCCESS:
      return false;
    default:
      return attemptingSocialReachPut;
  }
};

export default socialReachModalButtonReducer;

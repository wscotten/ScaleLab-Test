import {
  PUT_SOCIAL_REACH_INFO_FAIL,
  PUT_SOCIAL_REACH_INFO_SUCCESS,
} from '../../containers/SocialReachModalButton/reducer';
import { CLOSE_SOCIAL_REACH_MODAL } from '../../containers/SocialReachEditButton/constants';

const putResultStatusReducer = (putStatusResult = null, { type }) => {
  switch (type) {
    case CLOSE_SOCIAL_REACH_MODAL:
      return null;
    case PUT_SOCIAL_REACH_INFO_SUCCESS:
      return true;
    case PUT_SOCIAL_REACH_INFO_FAIL:
      return false;
    default:
      return putStatusResult;
  }
};

export default putResultStatusReducer;

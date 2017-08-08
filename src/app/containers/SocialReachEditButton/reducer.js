import { TOGGLE_SOCIAL_REACH_MODAL, CLOSE_SOCIAL_REACH_MODAL } from './constants';

const ageGroupsReducer = (editSocialReachModalShown = false, { type }) => {
  switch (type) {
    case CLOSE_SOCIAL_REACH_MODAL:
      return false;
    case TOGGLE_SOCIAL_REACH_MODAL:
      return !editSocialReachModalShown;
    default:
      return editSocialReachModalShown;
  }
};

export default ageGroupsReducer;

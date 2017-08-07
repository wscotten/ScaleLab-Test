export const TOGGLE_SOCIAL_REACH_MODAL = 'TOGGLE_SOCIAL_REACH_MODAL';
export const CLOSE_SOCIAL_REACH_MODAL = 'CLOSE_SOCIAL_REACH_MODAL';

export const toggleSocialReachModal = () => ({
  type: TOGGLE_SOCIAL_REACH_MODAL,
});

export const closeSocialReachModal = () => ({
  type: CLOSE_SOCIAL_REACH_MODAL,
});

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

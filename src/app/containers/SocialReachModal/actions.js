import { UPDATE_SOCIAL_REACH_MODAL, DONT_UPDATE } from './constants';

export const updateSocialReachModal = (platform, value) => {
  if (isNaN(value) || value < 0 || value.length > 10) return { type: DONT_UPDATE };
  return {
    type: UPDATE_SOCIAL_REACH_MODAL,
    payload: {
      platform,
      value: Number(value),
    },
  };
};

import { TOGGLE_DETAILS_BUTTON } from './constants';

export const toggleDetailsButton = () => ({
  type: TOGGLE_DETAILS_BUTTON,
});

const detailsButtonReducer = (currentDetailsState = true, { type }) => {
  switch (type) {
    case TOGGLE_DETAILS_BUTTON:
      return !currentDetailsState;
    default:
      return currentDetailsState;
  }
};

export default detailsButtonReducer;

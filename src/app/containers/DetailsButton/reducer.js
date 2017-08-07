export const TOGGLE_DETAILS_BUTTON = 'TOGGLE_DETAILS_BUTTON';

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

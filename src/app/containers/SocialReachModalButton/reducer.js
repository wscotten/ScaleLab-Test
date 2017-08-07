// import fetch from 'isomorphic-fetch';

export const CURRENTLY_ATTEMPTING_PUT = 'CURRENTLY_ATTEMPTING_PUT';
export const PUT_SOCIAL_REACH_INFO_SUCCESS = 'PUT_SOCIAL_REACH_INFO_SUCCESS';
export const PUT_SOCIAL_REACH_INFO_FAIL = 'PUT_SOCIAL_REACH_INFO_FAIL';

export const currentlyAttemptingPut = () => ({
  type: CURRENTLY_ATTEMPTING_PUT,
});

// const putToEndpoint = payload =>
//   fetch('https://s3-us-west-1.amazonaws.com/scalelab-test/social-media', {
//     method: 'PUT',
//     body: payload,
//   });

export const putSocialReachInfoSuccess = payload => ({
  type: PUT_SOCIAL_REACH_INFO_SUCCESS,
  payload,
});

export const putSocialReachInfoFail = error => ({
  type: PUT_SOCIAL_REACH_INFO_FAIL,
  error,
});

export const attemptToPutNewSocialReachInfo = payload => (dispatch) => {
  dispatch(currentlyAttemptingPut());

  // We are faking the Put Request so the actual Put is commented out.
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  return delay(2000).then(() => dispatch(putSocialReachInfoSuccess(payload)));
  // return putToEndpoint(payload).then(
  //   response => dispatch(putSocialReachInfoSuccess(response)),
  //   error => dispatch(putSocialReachInfoSuccess(error)),
  // );
};

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

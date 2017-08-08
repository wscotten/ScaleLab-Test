import fetch from 'isomorphic-fetch';

import {
  CURRENTLY_ATTEMPTING_PUT,
  PUT_SOCIAL_REACH_INFO_SUCCESS,
  PUT_SOCIAL_REACH_INFO_FAIL,
} from './constants';

export const currentlyAttemptingPut = () => ({
  type: CURRENTLY_ATTEMPTING_PUT,
});

export const putToEndpoint = payload =>
  fetch('https://s3-us-west-1.amazonaws.com/scalelab-test/social-media', {
    method: 'PUT',
    body: payload,
  });

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

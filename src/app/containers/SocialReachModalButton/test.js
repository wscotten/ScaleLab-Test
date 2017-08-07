import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, {
  currentlyAttemptingPut,
  putSocialReachInfoSuccess,
  putSocialReachInfoFail,
  CURRENTLY_ATTEMPTING_PUT,
  PUT_SOCIAL_REACH_INFO_SUCCESS,
  PUT_SOCIAL_REACH_INFO_FAIL,
  attemptToPutNewSocialReachInfo,
} from './reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it('attempts to put at fake endpoint', () => {
    const expectedActions = [
      {
        type: CURRENTLY_ATTEMPTING_PUT,
      },
      {
        payload: {},
        type: PUT_SOCIAL_REACH_INFO_SUCCESS,
      },
    ];
    const store = mockStore({});
    return store.dispatch(attemptToPutNewSocialReachInfo({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('actions', () => {
  it('should create an action to start the loading animation', () => {
    const expectedAction = {
      type: CURRENTLY_ATTEMPTING_PUT,
    };
    expect(currentlyAttemptingPut()).toEqual(expectedAction);
  });
  it('should create an action to indicate success', () => {
    const expectedAction = {
      type: PUT_SOCIAL_REACH_INFO_SUCCESS,
      payload: {},
    };
    expect(putSocialReachInfoSuccess({})).toEqual(expectedAction);
  });
  it('should create an action to indicate failure', () => {
    const expectedAction = {
      type: PUT_SOCIAL_REACH_INFO_FAIL,
      error: {},
    };
    expect(putSocialReachInfoFail({})).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('shouldnt do anything', () => {
    expect(
      reducer(false, {
        type: 'unimportant_action',
      }),
    ).toEqual(false);
  });
  it('should start the loading animation', () => {
    expect(
      reducer(false, {
        type: CURRENTLY_ATTEMPTING_PUT,
      }),
    ).toEqual(true);
  });
  it('should stop the loading animation', () => {
    expect(
      reducer(true, {
        type: PUT_SOCIAL_REACH_INFO_SUCCESS,
      }),
    ).toEqual(false);
  });
  it('should stop the loading animation', () => {
    expect(
      reducer(true, {
        type: PUT_SOCIAL_REACH_INFO_FAIL,
      }),
    ).toEqual(false);
  });
  it('should start the loading animation', () => {
    expect(
      reducer(false, {
        type: CURRENTLY_ATTEMPTING_PUT,
      }),
    ).toEqual(true);
  });
});

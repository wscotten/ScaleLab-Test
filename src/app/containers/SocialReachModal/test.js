import reducer, {
  updateSocialReachModal,
  UPDATE_SOCIAL_REACH_MODAL,
  DONT_UPDATE,
} from './reducer';

describe('actions', () => {
  it('it should update modal with number payload', () => {
    const expectedAction = {
      type: UPDATE_SOCIAL_REACH_MODAL,
      payload: { Youtube: 500000 },
    };
    expect(updateSocialReachModal('Youtube', 500000)).toEqual(expectedAction);
  });
  it('it should update modal with string payload', () => {
    const expectedAction = {
      type: UPDATE_SOCIAL_REACH_MODAL,
      payload: { Youtube: 500000 },
    };
    expect(updateSocialReachModal('Youtube', '500000')).toEqual(expectedAction);
  });
  it('it should reject updating modal', () => {
    const expectedAction = {
      type: DONT_UPDATE,
    };
    expect(updateSocialReachModal('Youtube', 'notnumberstring')).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('shouldnt do anything', () => {
    expect(
      reducer({}, {
        type: 'unimportant_action',
      }),
    ).toEqual({});
  });
  it('should update social reach modal', () => {
    const previousData = {
      total: 51239,
      Youtube: 127893,
      Facebook: 51239,
      Vine: 127893,
      Twitter: 51239,
      Instagram: 127893,
    };
    const nextData = {
      total: 51239,
      Youtube: 10000,
      Facebook: 51239,
      Vine: 127893,
      Twitter: 51239,
      Instagram: 127893,
    };
    expect(
      reducer(previousData, {
        type: UPDATE_SOCIAL_REACH_MODAL,
        payload: { Youtube: 10000 },
      }),
    ).toEqual(nextData);
  });
});

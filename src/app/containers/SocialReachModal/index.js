import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import CloseModalButton from '../CloseModalButton';
import PutResultStatusBar from '../../components/PutResultStatusBar';
import SocialReachModalButton from '../SocialReachModalButton';
import { updateSocialReachModal } from './actions';
import { logoArray } from '../../components/SocialReach';
import { closeSocialReachModal } from '../SocialReachEditButton/actions';
import { attemptToPutNewSocialReachInfo } from '../SocialReachModalButton/actions';
import './style.css';

const handleClick = ({ target, currentTarget }, closeModalButtonClicked) => {
  if (target === currentTarget) closeModalButtonClicked();
};

const style = ({
  editSocialReachModalShown,
  socialReachModalValues,
  modalValueChanged,
  closeModalButtonClicked,
  enterKeyPressed,
}) =>
  (editSocialReachModalShown
  ? (
    <div
      role="button"
      tabIndex={0}
      className={'modal-container'}
      onClick={e => handleClick(e, closeModalButtonClicked)}
    >
      <form
        className={'modal-box'}
        onSubmit={(e) => { e.preventDefault(); enterKeyPressed(socialReachModalValues); }}
      >
        <CloseModalButton />
        <h3>Social Media Followers</h3>
        <PutResultStatusBar />
        <div className={'modal-contents'}>
          <h3>All</h3>
          <input
            type="text"
            max="100000000"
            value={socialReachModalValues.total}
            onChange={value => modalValueChanged('total', value.target.value)}
          />
        </div>
        {Object.keys(logoArray).map(platform => {
          console.log(platform);
          return (
            <div key={platform} className={'modal-contents'}>
              <img alt="" src={logoArray[platform]} />
              <input
                type="text"
                max="100000000"
                value={socialReachModalValues[platform]}
                onChange={modalValueChanged(platform)}
              />
            </div>
          );
        })}
        <SocialReachModalButton />
      </form>
    </div>
  )
  : null);

style.propTypes = {
  editSocialReachModalShown: PropTypes.bool.isRequired,
  socialReachModalValues: PropTypes.PropTypes.shape({
    total: PropTypes.number.isRequired,
    Youtube: PropTypes.number.isRequired,
    Facebook: PropTypes.number.isRequired,
    Vine: PropTypes.number.isRequired,
    Twitter: PropTypes.number.isRequired,
    Instagram: PropTypes.number.isRequired,
  }).isRequired,
  modalValueChanged: PropTypes.func.isRequired,
  closeModalButtonClicked: PropTypes.func.isRequired,
  enterKeyPressed: PropTypes.func.isRequired,
};

const mapStateToProps = ({ editSocialReachModalShown, socialReachModalValues }) => ({
  editSocialReachModalShown,
  socialReachModalValues,
});

const mapDispatchToProps = dispatch => ({
  modalValueChanged: platform => (value) => {
    dispatch(updateSocialReachModal(platform, value.target.value));
  },
  closeModalButtonClicked: () => {
    dispatch(closeSocialReachModal());
  },
  enterKeyPressed: (payload) => {
    dispatch(attemptToPutNewSocialReachInfo(payload));
  },
});

const SocialReachModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(style);

export default SocialReachModal;

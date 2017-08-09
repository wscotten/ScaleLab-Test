import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CloseModalButton from '../CloseModalButton';
import PutResultStatusBar from '../../components/PutResultStatusBar';
import SocialReachModalButton from '../SocialReachModalButton';
import { updateSocialReachModal } from './actions';
import { logoArray } from '../../components/SocialReach';
import { closeSocialReachModal } from '../SocialReachEditButton/actions';
import { attemptToPutNewSocialReachInfo } from '../SocialReachModalButton/actions';
import SocialReachInput from '../../components/SocialReachInput';
import './style.css';

class style extends PureComponent {
  handleClick = (e) => {
    if (e.target === e.currentTarget) this.props.closeModalButtonClicked();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.enterKeyPressed(this.props.socialReachModalValues);
  }

  render() {
    const {
      editSocialReachModalShown,
      socialReachModalValues,
      modalValueChanged,
    } = this.props;
    return (
      editSocialReachModalShown
      ? (
        <div
          role="button"
          tabIndex={0}
          className={'modal-container'}
          onClick={this.handleClick}
        >
          <form
            className={'modal-box'}
            onSubmit={this.handleSubmit}
          >
            <CloseModalButton />
            <h3>Social Media Followers</h3>
            <PutResultStatusBar />
            <div className={'modal-contents'}>
              <h3>All</h3>
              <SocialReachInput
                modalValueChanged={modalValueChanged}
                value={socialReachModalValues.total}
                platform={'total'}
              />
            </div>
            {Object.keys(logoArray).map(platform =>
              (<div key={platform} className={'modal-contents'}>
                <img alt="" src={logoArray[platform]} />
                <SocialReachInput
                  modalValueChanged={modalValueChanged}
                  value={socialReachModalValues[platform]}
                  platform={platform}
                />
              </div>),
            )}
            <SocialReachModalButton />
          </form>
        </div>
      )
      : null
    );
  }
}

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
  modalValueChanged: (platform, value) => {
    dispatch(updateSocialReachModal(platform, value));
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

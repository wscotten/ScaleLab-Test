import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSocialReachModal } from './reducer';
import './style.css';

const style = ({ socialReachButtonClicked }) =>
    (<div
      className={'social-reach-edit-button'}
      role="button"
      tabIndex={0}
      onClick={() => socialReachButtonClicked()}
    >
      <h4>Edit</h4>
    </div>);

style.propTypes = {
  socialReachButtonClicked: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  socialReachButtonClicked: () => {
    dispatch(toggleSocialReachModal());
  },
});

const SocialReachEditButton = connect(
  null,
  mapDispatchToProps,
)(style);

export default SocialReachEditButton;

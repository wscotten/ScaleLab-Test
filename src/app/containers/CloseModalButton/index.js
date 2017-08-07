import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeSocialReachModal } from '../SocialReachEditButton/reducer';
import './style.css';

const style = ({ closeModalButtonClicked }) =>
  (<div
    role="button"
    tabIndex={0}
    className={'close-modal-button'}
    onClick={() => closeModalButtonClicked()}
  >x
  </div>);

style.propTypes = {
  closeModalButtonClicked: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  closeModalButtonClicked: () => {
    dispatch(closeSocialReachModal());
  },
});

const CloseModalButton = connect(
  null,
  mapDispatchToProps,
)(style);

export default CloseModalButton;

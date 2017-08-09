import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeSocialReachModal } from '../SocialReachEditButton/actions';
import './style.css';

class style extends PureComponent {
  handleClick = () => this.props.closeModalButtonClicked();
  render() {
    return (
      <div
        role="button"
        tabIndex={0}
        className={'close-modal-button'}
        onClick={this.handleClick}
      >x
      </div>
    );
  }
}

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

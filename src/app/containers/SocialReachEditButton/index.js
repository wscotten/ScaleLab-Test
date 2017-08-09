import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSocialReachModal } from './actions';
import './style.css';

class style extends PureComponent {
  handleClick = () => this.props.socialReachButtonClicked();
  render() {
    return (
      <div
        className={'social-reach-edit-button'}
        role="button"
        tabIndex={0}
        onClick={this.handleClick}
      >
        <h4>Edit</h4>
      </div>
    );
  }
}

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

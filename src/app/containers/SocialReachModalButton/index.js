import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attemptToPutNewSocialReachInfo } from './actions';
import './style.css';

class style extends PureComponent {
  handleClick = () => this.props.submitbuttonClicked(this.props.socialReachModalValues);
  render() {
    const { attemptingSocialReachPut } = this.props;
    return (
      <button onClick={this.handleClick} className={'modal-button'}>
        {attemptingSocialReachPut
          ? <div className="sk-fading-circle">
            <div className="sk-circle1 sk-circle" />
            <div className="sk-circle2 sk-circle" />
            <div className="sk-circle3 sk-circle" />
            <div className="sk-circle4 sk-circle" />
            <div className="sk-circle5 sk-circle" />
            <div className="sk-circle6 sk-circle" />
            <div className="sk-circle7 sk-circle" />
            <div className="sk-circle8 sk-circle" />
            <div className="sk-circle9 sk-circle" />
            <div className="sk-circle10 sk-circle" />
            <div className="sk-circle11 sk-circle" />
            <div className="sk-circle12 sk-circle" />
          </div>
          : <h3>Update</h3>
        }
      </button>
    );
  }
}

style.propTypes = {
  attemptingSocialReachPut: PropTypes.bool.isRequired,
  socialReachModalValues: PropTypes.PropTypes.shape({
    total: PropTypes.number.isRequired,
    Youtube: PropTypes.number.isRequired,
    Facebook: PropTypes.number.isRequired,
    Vine: PropTypes.number.isRequired,
    Twitter: PropTypes.number.isRequired,
    Instagram: PropTypes.number.isRequired,
  }).isRequired,
  submitbuttonClicked: PropTypes.func.isRequired,
};

const mapStateToProps = ({ attemptingSocialReachPut, socialReachModalValues }) => ({
  attemptingSocialReachPut,
  socialReachModalValues,
});

const mapDispatchToProps = dispatch => ({
  submitbuttonClicked: (payload) => {
    dispatch(attemptToPutNewSocialReachInfo(payload));
  },
});

const SocialReachModalButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(style);

export default SocialReachModalButton;

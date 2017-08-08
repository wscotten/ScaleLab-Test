import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';
import YoutubeLogo from '../../images/YoutubeLogo.png';
import FacebookLogo from '../../images/FacebookLogo.png';
import VineLogo from '../../images/VineLogo.png';
import TwitterLogo from '../../images/TwitterLogo.png';
import InstagramLogo from '../../images/InstagramLogo.png';
import SocialReachEditButton from '../../containers/SocialReachEditButton';
import './style.css';

export const logoArray = {
  Youtube: YoutubeLogo,
  Facebook: FacebookLogo,
  Vine: VineLogo,
  Twitter: TwitterLogo,
  Instagram: InstagramLogo,
};

export const numberFormatter = (number) => {
  if (number > 949999999) {
    return numeral(number).format('0a');
  } else if (number > 994999999) {
    return numeral(number).format('0.0a');
  } else if (number > 9949999) {
    return numeral(number).format('0a');
  } else if (number > 994999) {
    return numeral(number).format('0.0a');
  } else if (number > 9949) {
    return numeral(number).format('0a');
  } else if (number > 999) {
    return numeral(number).format('0.0a');
  }
  return number;
};

const style = ({ socialReach }) =>
  (<div className={'social-reach-container'}>
    <div className={'social-reach-text'}>
      <h4>Social Reach {numberFormatter(socialReach.total)}</h4>
      <SocialReachEditButton />
    </div>
    <div className={'social-reach-bar-container'}>
      {Object.keys(logoArray).map(platform =>
        (<div key={platform} className={'social-reach-bars'}>
          <div>
            <img alt="" src={logoArray[platform]} />
          </div>
          <p>{numberFormatter(socialReach[platform])}</p>
        </div>),
      )}
    </div>
  </div>);

style.propTypes = {
  socialReach: PropTypes.shape({
    total: PropTypes.number.isRequired,
    Youtube: PropTypes.number.isRequired,
    Facebook: PropTypes.number.isRequired,
    Vine: PropTypes.number.isRequired,
    Twitter: PropTypes.number.isRequired,
    Instagram: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ socialReach }) => ({
  socialReach,
});

const SocialReach = connect(
  mapStateToProps,
  null,
)(style);

export default SocialReach;

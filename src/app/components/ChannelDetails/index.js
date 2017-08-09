import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SocialReach from '../SocialReach';
import AgeGroups from '../AgeGroups';
import Genders from '../Genders';
import Earnings from '../Earnings';
import './style.css';

export const MONTHS_TO_SHOW = 9;

class style extends PureComponent {
  render() {
    const { detailsShown, channelDetails } = this.props;
    return (
      detailsShown
      ? (<div className={'channel-stats-container'}>
        <div className={'social-reach-age-groups-genders-container'}>
          <SocialReach socialReach={channelDetails.socialReach} />
          <AgeGroups
            ageGroups={channelDetails.ageGroups}
            barColors={{
              13: '#f8e71c',
              18: '#b9e986',
              25: '#7ed321',
              35: '#50e3c1',
              45: '#1abbcf',
              55: '#4a91e3',
            }}
          />
          <Genders
            genders={channelDetails.genders}
            barColors={{ male: '#1293f4', female: '#bd0de0' }}
          />
        </div>
        <Earnings
          earnings={channelDetails.earnings}
          barColor={'#1293f4'}
          monthsToShow={MONTHS_TO_SHOW}
        />
      </div>)
      : null
    );
  }
}

style.propTypes = {
  detailsShown: PropTypes.bool.isRequired,
  channelDetails: PropTypes.shape({
    socialReach: PropTypes.shape({
      total: PropTypes.number.isRequired,
      Youtube: PropTypes.number.isRequired,
      Facebook: PropTypes.number.isRequired,
      Vine: PropTypes.number.isRequired,
      Twitter: PropTypes.number.isRequired,
      Instagram: PropTypes.number.isRequired,
    }).isRequired,
    ageGroups: PropTypes.shape({
      13: PropTypes.number.isRequired,
      18: PropTypes.number.isRequired,
      25: PropTypes.number.isRequired,
      35: PropTypes.number.isRequired,
      45: PropTypes.number.isRequired,
      55: PropTypes.number.isRequired,
    }),
    genders: PropTypes.shape({
      male: PropTypes.number.isRequired,
      female: PropTypes.number.isRequired,
    }).isRequired,
    earnings: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      channel_id: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      gross: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ detailsShown, channelDetails }) => ({
  channelDetails,
  detailsShown,
});

const ChannelDetails = connect(
  mapStateToProps,
)(style);

export default ChannelDetails;

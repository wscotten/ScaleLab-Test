import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SocialReach from '../SocialReach';
import AgeGroups from '../AgeGroups';
import Genders from '../Genders';
import Earnings from '../Earnings';
import './style.css';

export const MONTHS_TO_SHOW = 9;

const style = ({ detailsShown, channelDetails }) =>
  (detailsShown
  ? (<div className={'channel-stats-container'}>
    <div className={'social-reach-age-groups-genders-container'}>
      <SocialReach />
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
      <Genders genders={channelDetails.genders} barColors={{ male: '#1293f4', female: '#bd0de0' }} />
    </div>
    <Earnings barColor={'#1293f4'} monthsToShow={MONTHS_TO_SHOW} />
  </div>)
  : null);

style.propTypes = {
  detailsShown: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ detailsShown, channelDetails }) => ({
  channelDetails,
  detailsShown,
});

const ChannelDetails = connect(
  mapStateToProps,
)(style);

export default ChannelDetails;

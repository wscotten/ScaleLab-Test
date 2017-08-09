import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import ProfilePicture from '../../images/ProfilePicture.png';
import AmericanFlag from '../../images/AmericanFlag.png';
import { numberFormatter } from '../SocialReach';
import './style.css';

const countryArray = {
  us: AmericanFlag,
};

// Date format in JSON is depreciated and I couldn't quickly find any easy package
// that changed it for me so this ugly function makes it presentable.
const convertTimeToCorrectDate = (time) => {
  if (time === 'n/a') return 'n/a';
  if (!time) return '';
  const timeString = time.split(' ');
  const dateString = timeString[0].split('-');
  const hourString = Number(timeString[1].split(':')[0]);
  let realDay;
  if (hourString < 7) {
    if (dateString[1] < '10') {
      realDay = `0${(Number(dateString[1]) - 1)}`;
    } else {
      realDay = (Number(dateString[1]) - 1);
    }
  } else {
    realDay = dateString[1];
  }
  return moment(`${dateString[2]}-${dateString[0]}-${realDay}`).format('MMM D, YYYY');
};

class style extends PureComponent {
  render() {
    const { channelBaseInfo } = this.props;
    return (
      <div>
        <div className={'channel-base-info-container'}>
          <img alt="" src={ProfilePicture} />
          <div>
            <div className={'channel-name-container'}>
              <a href={`https://youtube.com/${channelBaseInfo.name}`}>
                {channelBaseInfo.name}&nbsp;&nbsp;&nbsp;
              </a>
              <div
                className={'linked-status'}
                style={{ backgroundColor: channelBaseInfo.status === 'linked' ? '#80d324' : 'red' }}
              >{channelBaseInfo.status}
              </div>
              <p>
                {channelBaseInfo.youtube_channel_id}
              </p>
            </div>
            <div className={'base-channel-youtube-stats-container'}>
              <div className={'views-subs-videos-container'}>
                <p><strong>{numberFormatter(channelBaseInfo.total_views)}</strong> Views</p>
                <p><strong>{numberFormatter(channelBaseInfo.subscribers)}</strong> Subs</p>
                <p><strong>{numberFormatter(channelBaseInfo.videos)}</strong> Videos</p>
              </div>
              <div className={'current-month-views-container'}>
                <p><strong>{numberFormatter(channelBaseInfo.last_month_views)}</strong><br />
                  &nbsp;{moment().subtract(1, 'months').format('MMM')} Views
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={'network-container'}>
          <div>
            <p><strong>Network:</strong> {channelBaseInfo.network}</p>
            <p><strong>Joined:</strong> {convertTimeToCorrectDate(channelBaseInfo.joined_at)}</p>
          </div>
          <div>
            <p><strong>Owner:</strong> {channelBaseInfo.owner}</p>
            <p><strong>Category:</strong> {channelBaseInfo.category}</p>
          </div>
          <div>
            <p><strong>Commission:</strong> {channelBaseInfo.commission}%</p>
            <p>
              <strong>Country: </strong>
              <img alt="" src={countryArray[channelBaseInfo.country_id]} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

style.propTypes = {
  channelBaseInfo: PropTypes.shape({
    category: PropTypes.string.isRequired,
    commission: PropTypes.number.isRequired,
    country_id: PropTypes.string.isRequired,
    joined_at: PropTypes.string.isRequired,
    last_month_views: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    network: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    subscribers: PropTypes.number.isRequired,
    total_views: PropTypes.number.isRequired,
    videos: PropTypes.number.isRequired,
    youtube_channel_id: PropTypes.string.isRequired,
  }).isRequired,
};


const mapStateToProps = ({ channelBaseInfo }) => ({
  channelBaseInfo,
});

const ChannelBaseInfo = connect(
  mapStateToProps,
  null,
)(style);

export default ChannelBaseInfo;

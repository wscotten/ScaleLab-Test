import { combineReducers } from 'redux';
import channelBaseInfo from './components/ChannelBaseInfo/reducer';
import channelDetails from './components/ChannelDetails/reducer';
import socialReach from './components/SocialReach/reducer';
import earnings from './components/Earnings/reducer';
import detailsShown from './containers/DetailsButton/reducer';
import editSocialReachModalShown from './containers/SocialReachEditButton/reducer';
import socialReachModalValues from './containers/SocialReachModal/reducer';
import attemptingSocialReachPut from './containers/SocialReachModalButton/reducer';
import putResultStatus from './components/PutResultStatusBar/reducer';

export default combineReducers({
  channelBaseInfo,
  channelDetails,
  socialReach,
  earnings,
  detailsShown,
  editSocialReachModalShown,
  socialReachModalValues,
  attemptingSocialReachPut,
  putResultStatus,
});

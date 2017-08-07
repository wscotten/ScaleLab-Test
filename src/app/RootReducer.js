import { combineReducers } from 'redux';
import channelBaseInfo from './components/ChannelBaseInfo/reducer';
import ageGroups from './components/AgeGroups/reducer';
import socialReach from './components/SocialReach/reducer';
import genders from './components/Genders/reducer';
import earnings from './components/Earnings/reducer';
import detailsShown from './containers/DetailsButton/reducer';
import editSocialReachModalShown from './containers/SocialReachEditButton/reducer';
import socialReachModalValues from './containers/SocialReachModal/reducer';
import attemptingSocialReachPut from './containers/SocialReachModalButton/reducer';
import putResultStatus from './components/PutResultStatusBar/reducer';

export default combineReducers({
  channelBaseInfo,
  ageGroups,
  socialReach,
  genders,
  earnings,
  detailsShown,
  editSocialReachModalShown,
  socialReachModalValues,
  attemptingSocialReachPut,
  putResultStatus,
});

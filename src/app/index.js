import React from 'react';
import { Grid } from 'react-bootstrap';
import ChannelBaseInfo from './components/ChannelBaseInfo';
import DetailsButton from './containers/DetailsButton';
import SocialReachModal from './containers/SocialReachModal';
import ChannelDetails from './components/ChannelDetails';
import './style.css';

const index = () =>
  (<div>
    <Grid>
      <div className={'dashboard-container'}>
        <div style={{ paddingLeft: 15, paddingRight: 15 }}>
          <h4>Channels</h4>
        </div>
        <ChannelBaseInfo />
        <DetailsButton />
        <ChannelDetails />
      </div>
    </Grid>
    <SocialReachModal />
  </div>);

export default index;

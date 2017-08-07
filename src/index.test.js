import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from './app/index';
import store from './index';
import { getChannelInfo } from './app/components/ChannelBaseInfo/reducer';

const defaultData = {
  channels: {
    id: 78,
    youtube_channel_id: 'UCh8mkK_A3827d98sfslfa',
    name: 'RetroSnickers',
    network: 'ScaleLab',
    owner: 'Scalelab Affiliate',
    status: 'linked',
    country_id: 'us',
    joined_at: '03-24-2013 04:33:03',
    category: 'Entertainment',
    commission: 50.0,
  },
  channelStats: {
    id: 22,
    channel_id: 78,
    total_views: 9999982,
    last_month_views: 990148,
    subscribers: 7689,
    videos: 95,
    social_reach: 9900234,
    youtube_reach: 987654,
    facebook_reach: 99999,
    vine_reach: 50876,
    twitter_reach: 12987,
    instagram_reach: 1497,
    age_groups: '{"13": 9.8,"18": 30.1,"25": 29.8,"35": 10.1,"45": 8.0,"55": 4.9}',
    female_ratio: 59.8,
    male_ratio: 40.2,
  },
  earnings: [
    {
      id: 1,
      channel_id: 78,
      month: 3,
      year: 2016,
      gross: 12000,
    },
    {
      id: 2,
      channel_id: 79,
      month: 3,
      year: 2016,
      gross: 12000,
    },
    {
      id: 3,
      channel_id: 78,
      month: 4,
      year: 2016,
      gross: 15234,
    },
    {
      id: 4,
      channel_id: 78,
      month: 5,
      year: 2016,
      gross: 22213,
    },
    {
      id: 5,
      channel_id: 78,
      month: 6,
      year: 2016,
      gross: 12000,
    },
    {
      id: 6,
      channel_id: 78,
      month: 7,
      year: 2016,
      gross: 15234,
    },
    {
      id: 7,
      channel_id: 78,
      month: 8,
      year: 2016,
      gross: 22213,
    },
    {
      id: 8,
      channel_id: 78,
      month: 9,
      year: 2016,
      gross: 12000,
    },
    {
      id: 9,
      channel_id: 78,
      month: 10,
      year: 2016,
      gross: 15234,
    },
    {
      id: 10,
      channel_id: 78,
      month: 11,
      year: 2016,
      gross: 22213,
    },
    {
      id: 11,
      channel_id: 78,
      month: 12,
      year: 2016,
      gross: 49876,
    },
    {
      id: 12,
      channel_id: 78,
      month: 1,
      year: 2017,
      gross: 98723,
    },
    {
      id: 13,
      channel_id: 78,
      month: 2,
      year: 2017,
      gross: 10,
    },
  ],
};

store.dispatch(getChannelInfo(defaultData));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div);
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

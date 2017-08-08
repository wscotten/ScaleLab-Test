import fetch from 'isomorphic-fetch';
import { getChannelInfo } from './app/components/ChannelBaseInfo/actions';
import store from './index';

const fallBackData = {
  channelData: {
    data: [
      {
        id: 78,
        youtube_channel_id: 'n/a',
        name: 'n/a',
        network: 'n/a',
        owner: 'n/a',
        status: 'n/a',
        country_id: 'n/a',
        joined_at: 'n/a',
        category: 'n/a',
        commission: 'n/a',
      },
    ],
  },
  channelStats: {
    data: [
      {
        id: 22,
        channel_id: 78,
        total_views: 'n/a',
        last_month_views: 'n/a',
        subscribers: 'n/a',
        videos: 'n/a',
        social_reach: 'n/a',
        youtube_reach: 'n/a',
        facebook_reach: 'n/a',
        vine_reach: 'n/a',
        twitter_reach: 'n/a',
        instagram_reach: 'n/a',
        age_groups: '{"13": "n/a","18": "n/a","25": "n/a","35": "n/a","45": "n/a","55": "n/a"}',
        female_ratio: 'n/a',
        male_ratio: 'n/a',
      },
    ],
  },
  channelEarnings: {
    data: [
      {
        id: 1,
        channel_id: 78,
        month: 13,
        year: 2016,
        gross: 'n/a',
      },
      {
        id: 2,
        channel_id: 78,
        month: 13,
        year: 2016,
        gross: 'n/a',
      },
    ],
  },
};

const getResponse = (response, apiEndpoint) =>
    (response.status > 400 ? fallBackData[apiEndpoint] : response.json());

export default async function getJSONFromApi() {
  const [response, response2, response3] = await Promise.all([
    fetch('https://s3-us-west-1.amazonaws.com/scalelab-test/channels.json'),
    fetch('https://s3-us-west-1.amazonaws.com/scalelab-test/channel-stats.json'),
    fetch('https://s3-us-west-1.amazonaws.com/scalelab-test/earnings.json'),
  ]);
  const [channelData, channelStatsData, channelEarnings] = await Promise.all([
    getResponse(response, 'channelData'),
    getResponse(response2, 'channelStats'),
    getResponse(response3, 'channelEarnings'),
  ]);
  const channelID = channelData.data[0].id;
  const channels = channelData.data.find(channel => channel.id === channelID);
  const channelStats = channelStatsData.data.find(channel => channel.channel_id === channelID);
  const earnings = channelEarnings.data.filter(month => month.channel_id === channelID);
  const payload = {
    channels,
    channelStats,
    earnings,
  };
  store.dispatch(getChannelInfo(payload));
}

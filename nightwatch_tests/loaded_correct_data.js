const VIEWS_SUBS_VIDEOS = [
  '10M Views',
  '7.7k Subs',
  '95 Videos',
];
const NETWORK_VALUES = [
  'Network: ScaleLab',
  'Joined: Mar 23, 2013',
  'Owner: Scalelab Affiliate',
  'Category: Entertainment',
  'Commission: 50%',
  'Country:',
];
const SOCIAL_REACH_VALUES = ['988k', '100k', '51k', '13k', '1.5k'];
const AGE_GROUP_VALUES = [
  '10%', '13-17',
  '30%', '18-24',
  '30%', '25-34',
  '10%', '35-34',
  '8%', '45-54',
  '5%', '55+',
];
const GENDER_VALUES = [
  '40%', 'male',
  '60%', 'female',
];
const EARNINGS_VALUES = [
  '$12,000', 'Jun',
  '$15,234', 'Jul',
  '$22,213', 'Aug',
  '$12,000', 'Sep',
  '$15,234', 'Oct',
  '$22,213', 'Nov',
  '$49,876', 'Dec',
  '$98,723', 'Jan',
  '$10', 'Feb',
];

module.exports = {
  'Make sure the data is displayed.': (browser) => {
    browser
      .url('http://localhost:3000/')
      .waitForElementPresent('.channel-stats-container', 2000)
      .getText('.channel-name-container > a', (result) => {
        browser.assert.equal(result.value, 'RetroSnickers   ');
      })
      .getText('.linked-status', (result) => {
        browser.assert.equal(result.value, 'linked');
      })
      .getText('.channel-name-container > p', (result) => {
        browser.assert.equal(result.value, 'UCh8mkK_A3827d98sfslfa');
      })
      .elements('css selector', '.views-subs-videos-container > p', (elements) => {
        elements.value.forEach((element, i) => {
          browser.elementIdText(element.ELEMENT, (result) => {
            browser.assert.equal(result.value, VIEWS_SUBS_VIDEOS[i]);
          });
        });
      })
      .getText('.current-month-views-container > p', (result) => {
        browser.assert.equal(result.value, '990k\n Jul Views');
      })
      .elements('css selector', '.network-container > div > p', (elements) => {
        elements.value.forEach((element, i) => {
          browser.elementIdText(element.ELEMENT, (result) => {
            browser.assert.equal(result.value, NETWORK_VALUES[i]);
          });
        });
      })
      .getText('.social-reach-text > h4', (result) => {
        browser.assert.equal(result.value, 'Social Reach 9.9M');
      })
      .elements('class name', 'social-reach-bars', (elements) => {
        elements.value.forEach((element, i) => {
          browser.elementIdText(element.ELEMENT, (result) => {
            browser.assert.equal(result.value, SOCIAL_REACH_VALUES[i]);
          });
        });
      })
      .elements('css selector', '.age-group-bar-container > div > p', (elements) => {
        elements.value.forEach((element, i) => {
          browser.elementIdText(element.ELEMENT, (result) => {
            browser.assert.equal(result.value, AGE_GROUP_VALUES[i]);
          });
        });
      })
      .elements('css selector', '.genders-bar-container > div > p', (elements) => {
        elements.value.forEach((element, i) => {
          browser.elementIdText(element.ELEMENT, (result) => {
            browser.assert.equal(result.value, GENDER_VALUES[i]);
          });
        });
      })
      .elements('css selector', '.earnings-bar-container > div > p', (elements) => {
        elements.value.forEach((element, i) => {
          browser.elementIdText(element.ELEMENT, (result) => {
            browser.assert.equal(result.value, EARNINGS_VALUES[i]);
          });
        });
      })
      .end();
  },
};

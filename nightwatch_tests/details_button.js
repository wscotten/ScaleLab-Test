module.exports = {
  'Make sure the details button functions correctly': (browser) => {
    browser
      .url('http://localhost:3000/')
      .waitForElementPresent('.channel-stats-container', 2000)
      .pause(500)
      .click('.detailsButton')
      .waitForElementNotPresent('.channel-stats-container', 1000)
      .click('.detailsButton')
      .waitForElementPresent('.channel-stats-container', 1000)
      .end();
  },
};

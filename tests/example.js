module.exports = {
  'End to End Test Project': (browser) => {
    browser
      .url('http://localhost:3000/')
      .waitForElementPresent('.channel-stats-container', 1000)
      .click('.detailsButton')
      .waitForElementNotPresent('.channel-stats-container', 1000)
      .click('.detailsButton')
      .waitForElementPresent('.channel-stats-container', 1000)
      .click('.social-reach-edit-button')
      .waitForElementPresent('.modal-box', 1000)
      .click('.close-modal-button')
      .waitForElementNotPresent('.modal-box', 1000)
      .getText('.social-reach-bars:nth-of-type(1)', function(result) {
        this.assert.equal(result.value, '988k');
      })
      .click('.social-reach-edit-button')
      .waitForElementPresent('.modal-box', 1000)
      .setValue('.modal-contents:nth-of-type(3) input', 1)
      .click('.modal-button')
      .waitForElementNotPresent('.modal-box', 3000)
      .getText('.social-reach-bars:nth-of-type(1)', function(result) {
        this.assert.equal(result.value, '9.9M');
      })
      .end();
  },
};

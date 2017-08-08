module.exports = {
  'Make sure the modal opens and closes correctly': (browser) => {
    browser
      .url('http://localhost:3000/')
      .waitForElementPresent('.channel-stats-container', 2000)
      .click('.social-reach-edit-button')
      .waitForElementPresent('.modal-box', 1000)
      .click('.close-modal-button')
      .waitForElementNotPresent('.modal-box', 1000)
      .click('.social-reach-edit-button')
      .waitForElementPresent('.modal-box', 1000)
      .moveToElement('.modal-container', 10, 10)
      .mouseButtonClick(0)
      .waitForElementNotPresent('.modal-box', 1000)
      .end();
  },
  'Make sure the modal updates properly': (browser) => {
    browser
      .url('http://localhost:3000/')
      .waitForElementPresent('.channel-stats-container', 2000)
      .getText('.social-reach-bars:nth-of-type(1)', (result) => {
        browser.assert.equal(result.value, '988k');
      })
      .click('.social-reach-edit-button')
      .waitForElementPresent('.modal-box', 1000)
      .setValue('.modal-contents:nth-of-type(3) input', 1)
      .getText('.social-reach-bars:nth-of-type(1)', (result) => {
        browser.assert.equal(result.value, '988k');
      })
      .getValue('.modal-contents:nth-of-type(3) input', (result) => {
        browser.assert.equal(result.value, '9876541');
      })
      .click('.modal-button')
      .waitForElementPresent('.modal-button > h3', 3000)
      .getText('.social-reach-bars:nth-of-type(1)', (result) => {
        browser.assert.equal(result.value, '9.9M');
      })
      .end();
  },
};

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Then}) {
  Then(/^I go to (.+)$/, async function (url) {
    await this.driver.get(url);
  });

  Then(/^I can see the app$/, async function () {
    await this.driver.findElement({css: 'spin-app'});
  });
});
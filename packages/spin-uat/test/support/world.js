const {defineSupportCode} = require('cucumber');
const wd = require('selenium-webdriver');

function World() {
  this.driver = (new wd.Builder())
    .forBrowser(wd.Browser.CHROME)
    .usingServer('http://selenium:4444/wd/hub')
    .build();
}

defineSupportCode(function ({setWorldConstructor}) {
  setWorldConstructor(World);
});

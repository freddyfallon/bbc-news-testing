var expect = require('chai').expect;
const Homepage = require('../page-objects/homepage');

module.exports = function () {

  this.Given (/^I visit "([^"]*)"$/, (url) => {
    Homepage.visit(url);
  });

  this.When (/^I click on UK$/, () => {
    Homepage.clickUkLink();
  });

  this.Then (/^I should be at "([^"]*)"$/, (url) => {
    expect(browser.getUrl()).to.eq(url);
  });
};

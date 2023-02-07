/*jshint esversion: 8 */

const { loginPageURL } = require('../config');
const { expect } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");

describe("Login Page Availability Test", function() {
  this.timeout(30000)
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });

  it("should load the login page", async function() {
    await driver.get(loginPageURL);
    const loginPageTitle = await driver.getTitle();
    expect(loginPageTitle).to.equal("Login | Brenntag Connect");
  });
  
});
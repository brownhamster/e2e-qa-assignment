/*jshint esversion: 8 */

const config = require("../config.json");
const loginPageURL = config.url;
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
    
    //loading login page
    await driver.get(loginPageURL);
    //checking login page title
    const loginPageTitle = await driver.getTitle();
    expect(loginPageTitle).to.equal(config.exp_correct_login_title);
  });
  
});
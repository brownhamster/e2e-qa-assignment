const config = require("../config.json");
const loginPageURL = config.url;
const { expect } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require('assert');


describe("Sign Up Page Navigation test", function() {
    this.timeout(50000)
    let driver;
  
    beforeEach(async function() {
      driver = await new Builder().forBrowser("chrome").build();
      await driver.get(loginPageURL);
    });
  
    afterEach(async function() {
      await driver.quit();
    });
  
    it("should navigate to sign up page", async function() {
      
    // click on the Sign Up Request button
    await driver.findElement(By.className("sign-up")).findElement(By.tagName("a")).click();

    // select India from the country dropdown
    await driver.wait(until.elementLocated(By.className("select-placeholder")), 5000).click();
    await driver.wait(until.elementLocated(By.xpath("//*[text()='" + config.sign_up_country + "']")), 5000).click();

    // click on the Request for sign up button
    await driver.wait(until.elementLocated(By.className("button")), 5000).click();

    // wait for the sign up page to load
    let url = await driver.getCurrentUrl();

    // assert that the user has been navigated to the sign up page
    assert.equal(url, config.exp_sign_up_result);
  });
    
  });

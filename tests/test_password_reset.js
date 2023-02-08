/*jshint esversion: 8 */

const config = require("../config.json");
const loginPageURL = config.url;
const username = config.username_reset_password
const { expect } = require("chai");
const { Builder, By, Key, until, Browser } = require("selenium-webdriver");
const assert = require('assert');
const { selectReporter } = require("grunt-contrib-jshint/tasks/lib/jshint");

describe('Password Reset Test', function() {
    this.timeout(30000)
    let driver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get(loginPageURL);
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('should send instructions to reset password', async function() {
      await driver.findElement(By.css("p.c57e100a6.cdd0fccde a.c23626b08.cb8256979.cae524cbf")).click();

      //waiting to navigate to next page
      await driver.wait(until.elementLocated(By.id("email")), 10000);
      await driver.findElement(By.id("email")).sendKeys(username);
      await driver.findElement(By.xpath("//button[@value='default']")).click();

      //waiting till required element is located 
      await driver.wait(until.elementLocated(By.css("h1.cd2c7af91.c1d267ff3")), 10000);

      // get the "Check Your Email" element text
      const checkEmailText = await driver.findElement(By.css("h1.cd2c7af91.c1d267ff3")).getText();

      // assert that the "Check Your Email" element is displayed with the correct text
      expect(checkEmailText).to.equal("Check Your Email");
    });
  });
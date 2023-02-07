/*jshint esversion: 8 */

const config = require("../config.json");
const loginPageURL = config.url;
const { expect } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require('assert');

describe('Password Reset Test', function() {
    this.timeout(30000)
    let driver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get(loginPageURL);
    });

    // afterEach(async function() {
    //     await driver.quit();
    // });

    it('should send instructions to reset password', async function() {
      await driver.findElement(By.css("p.c57e100a6.cdd0fccde a.c23626b08.cb8256979.cae524cbf")).click();
      await driver.findElement(By.id("email")).sendKeys("sushmita94mishra@gmail.com");
     // await email.sendKeys("recruitment@digib.com");
     await driver.findElement(By.xpath("//button[@value='default']")).click();
      let resetMessage = await driver.findElement(By.css("div.c3d858048")).getText();
      assert.equal(resetMessage, "Password reset instructions sent");
    });
  });
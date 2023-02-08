const { Builder, By, until } = require("selenium-webdriver");
const config = require("../config.json");
const { expect } = require("chai");
const assert = require('assert');


describe('Navigate to incorrect URL', function() {
    this.timeout(30000)
    let driver;
  
    before(async function() {
      driver = await new Builder().forBrowser('chrome').build();
    });
  
    after(async function() {
      await driver.quit();
    });
  
    it('should throw an error', async function() {
      try {
        await driver.get(config.incorrect_url);
      } catch (error) {
        assert.notEqual(error.message, '', 'Expected an error to be thrown');
      }
    });
  });
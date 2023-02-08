/*jshint esversion: 8 */

const config = require("../config.json");
const loginPageURL = config.url;
const vietText = config.vietText;
const thaiText = config.thaiText;
const chineseText = config.chineseText;
const { expect } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require('assert');

describe("Login Page Availability Test", function() {
  this.timeout(50000)
  let driver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get(loginPageURL);
    });

    afterEach(async function() {
        await driver.quit();
    });

    it("should dispaly login page in Vietnamese", async function() {

        //finding the element with viet text
        await driver.findElement(By.xpath("//a[text()='" + vietText +"']")).click();
        //waiting for element to load
        await driver.wait(until.elementLocated(By.xpath("//*[@id='right-side']/div/div[1]/h3")), 5000);
        //checking language greetings
        let greeting = await driver.findElement(By.xpath("//*[@id='right-side']/div/div[1]/h3")).getText();
        assert.equal(greeting, config.exp_viet_greeting);
    });

    it("should dispaly login page in Traditional Chinese (Hong Kong)", async function() {
        await driver.findElement(By.xpath("//a[text()='" + chineseText +"']")).click();
        await driver.wait(until.elementLocated(By.xpath("//*[@id='right-side']/div/div[1]/h3")), 5000);
        let greeting = await driver.findElement(By.xpath("//*[@id='right-side']/div/div[1]/h3")).getText();
        assert.equal(greeting, config.exp_chinese_greeting);
    });

    it("should dispaly login page in Thai", async function() {
        await driver.findElement(By.xpath("//a[text()='" + thaiText +"']")).click();
        await driver.wait(until.elementLocated(By.xpath("//*[@id='right-side']/div/div[1]/h3")), 5000);
        let greeting = await driver.findElement(By.xpath("//*[@id='right-side']/div/div[1]/h3")).getText();
        assert.equal(greeting, config.exp_thai_greeting);
    });
});

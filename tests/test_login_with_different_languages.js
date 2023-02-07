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
  this.timeout(30000)
  let driver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get(loginPageURL);
    });

    afterEach(async function() {
        await driver.quit();
    });

    it("should dispaly login page in Vietnamese", async function() {

        await driver.findElement(By.xpath("//a[text()='" + vietText +"']")).click();
        await driver.wait(until.elementLocated(By.xpath("//*[@id='right-side']/div/div[1]/h3")), 5000);
        let greeting = await driver.findElement(By.xpath("//*[@id='right-side']/div/div[1]/h3")).getText();
        assert.equal(greeting, "Chào mừng bạn đến với Brenntag Connect!");
    });

    it("should dispaly login page in Vietnamese in Traditional Chinese (Hong Kong)", async function() {
        await driver.findElement(By.xpath("//a[text()='" + chineseText +"']")).click();
        await driver.wait(until.elementLocated(By.xpath("//*[@id='right-side']/div/div[1]/h3")), 5000);
        let greeting = await driver.findElement(By.xpath("//*[@id='right-side']/div/div[1]/h3")).getText();
        assert.equal(greeting, "歡迎使用Brenntag Connect！");
    });

    it("should dispaly login page in Vietnamese in Thai", async function() {
        await driver.findElement(By.xpath("//a[text()='" + thaiText +"']")).click();
        await driver.wait(until.elementLocated(By.xpath("//*[@id='right-side']/div/div[1]/h3")), 5000);
        let greeting = await driver.findElement(By.xpath("//*[@id='right-side']/div/div[1]/h3")).getText();
        assert.equal(greeting, "ยินดีต้อนรับสู่ Brenntag Connect!");
    });
});

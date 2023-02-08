const { Builder, By, until } = require("selenium-webdriver");
const config = require("../config.json");
const { expect } = require("chai");
const assert = require("assert");

describe("Track Load Time of a Page", function () {
    this.timeout(30000)
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });

    it("should track load time of a page", async function () {
        let startTime = new Date().getTime();
        await driver.get(config.url);
        await driver.wait(until.titleIs("Login | Brenntag Connect"), 1000);
        let endTime = new Date().getTime();
        let loadTime = endTime - startTime;
        expect(loadTime).lessThanOrEqual(30000);
    });

    after(async function () {
        await driver.quit();
    });
});

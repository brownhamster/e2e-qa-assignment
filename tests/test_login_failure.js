const {Builder, By, Key, until} = require("selenium-webdriver");
const assert = require("assert");
const fs = require("fs");
const config = require("../config.json");

describe("Brenntag Login Test", function() {
    this.timeout(30000);
    let driver;

  before(async function() {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(config.url);
  });

  after(async function() {
    await driver.quit();
  });

  it("should fail to login on on entering invalid credentials", async function() {

    // Locate the username and password fields and input the values from the config
    await driver.findElement(By.id("username")).sendKeys(config.username);
    await driver.findElement(By.id("password")).sendKeys(config.password);

    // Locate the submit button and click on it
    await driver.findElement(By.xpath("//button[@value='default']")).click();

    // Wait for the error message to appear
    let errorMessage = await driver.wait(until.elementLocated(By.css("#error-element-password")), 5000);
    let errorMessageText = await errorMessage.getText();
    assert.strictEqual(errorMessageText, "Wrong email or password");

    // Take a screenshot of the error message
    await driver.takeScreenshot().then(function(data) {
    fs.writeFileSync("error_screenshot.png", data, "base64");
    }); 
  });
});

# Solution to Test Automation Assignment

The project contains a set of 9 test cases in 7 suites. Each suite is a scenario and may or may not have multiple test cases.


## Features

- To verify the availabilty of Login Page
- To verify the availabilty of the login page in various languages
- To verify correct error message on incorrect login
- To verify navigation to password reset request page
- To verify a minimum load time
- To verify correct error message on accessing incorrect URL
- To verify successful navigation to sign up page.


## Installation

1. Downloaad and VS Code Studio 

2. Install Node.js

3. Install selenium-webdriver, mocha, chai, mochawesome, mochaTest and grunt using NPM.


## Run Tests Locally

1. Clone Project using Command Prompt/Terminal.
```bash
    git clone git@github.com:brownhamster/e2e-qa-assignment.git
```
2. Open the project in VS Code Studio
3. From the project root folder run the following commands using VS Code's terminal.

```bash
npm install selenium-webdriver
```
```bash
npm install npm install mochawesome
```
```bash
npm install chai
```
```bash
npm install grunt-mocha-test
```
4. To run the project run the following from the project root folder
```bash
grunt
```


## Running Tests and Reports

To run tests, run the following command from the project home

```bash
  grunt
```
Note: The artifacts for the tests are generated and saved in the following locations - 

Test Screenshots for the failure message - /<path to project root>/error_screenshot.png

Reports - /<project root folder>/reports/mochawesome.html


## Tech Stack

1. Javascript - JavaScript is a high-level, dynamic, and interpreted programming language used for creating interactive and dynamic web pages and applications

2. VS Code - VS Code studio is one of the most popular open source IDE and editors where all the functionalities required are readily available.

3. Grunt - Grunt is a JavaScript task runner that automates repetitive tasks involved in web development such as minification, compilation, linting, testing, and more. It provides a simple and consistent way to perform these tasks, freeing developers from manual execution and reducing the chances of errors.

4. Mochawesome - Mochawesome is a JavaScript library used for generating HTML reports for Mocha tests. It provides a convenient and visually appealing way to display test results, making it easier to understand and analyze the outcome of the tests. The library is commonly used in combination with Mocha, a popular JavaScript testing framework, to provide detailed and informative reports of the test results.

5. Selenium - Selenium is one of the most popular UI automation frameworks available. It supports a lot of different browsers and languages and works seamlessly with Java and any IDE.

6. Mocha - Mocha is a JavaScript testing framework that provides a simple, flexible and fast way to test Node.js and browser-based applications. It allows you to write and run both unit and integration tests and provides features such as asynchronous testing, test retries, and test reporting.


## Assignment 3 - Task - Solution

Password reset request success (verifying password reset not needed but
describe how you would solve this in automation)

As a part of this question, the solution in the project includes navigating to the password request page. Although, the functionality has already been implemented in the automation project, I would like to point out that automating a 3rd party ,mailing option such as GMail is not currently fully supported by automation tasks due to GMail's privacy and security policies. However, the asswertion to verify the receipt of the mail can be conducted using a 3rd part dummy email creator, the process of automation would look as below - 

1. Send a pssword reset request to a dummy, low security email (Please make sure to have created an account with the email ID previously)

2. Implement Nodemailer package via NPM to access the email box.

3. Traverse the email via mail subject to find the required email.

The password reset request can be sent using the below steps - 

1. Go to the login homepage
2. Click on Forgot Password
3. Enter the email ID which is already registered with brenntag
4. Click submit
5. User should receive an email in the inbox for password reset


## Notes

1. The whole project has benn written and executed on Mac. However, utmost care has been taken not to make it a factior in execution.

2. Sample reports are avaialble in the Git repo

3. Sample screenshot of the error message is also available in the Git repo

4. The soltuion to Assignment 1 and Assignment 2 are also added to the repo as Assignment-1-Solution.md and Assignment-2-Solution.md


## Authors

- [@brownhamster](https://www.github.com/brownhamster)


# CodeceptJS with Selenium

The purpose of this POC is to perform a login test on the Personal page through the Codeceptjs framework using selenium as a base to access the web.

## Project
- Test follows the guidelines proposed in task QA-277
- Selenium project installation was based on the tutorial described in www.codecept.io/quickstart and in https://codecept.io/webdriver/

## Prerequisites:
* Node installed on computer. [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
Note that CodeceptJS requires Node.js version 8.09 or later.
* Java installed on computer. [Download & Install Node.js] (https://www.java.com/pt_BR/download/)
Note that CodeceptJS requires Java version 8 or later.

### Cloning The GitHub Repository
* The recommended way to get this program is to use git to directly clone the CodecepJSSelenium repository:
```bash
$ git clone git@github.com:agilecontent/qa.git
```
* Open a command line in the project folder with administrator authorization.

## Install
* Run this command in the application folder from the command-line:
```bash
$ npm install
```

## Run the test
* If you want run the test, open a command line in administration mode in root of project (same folder as the settings file is).
* Type command if you want run the test step by step: `npx codeceptjs run --steps`
* If you want to debug it: `npx codeceptjs run --debug`
* If you want to debug a specific test: `npx codeceptjs run <name-of-file> --debug`

## About the configuration file (codecept.conf.js):
* Codeceptjs Selenium supports multiple browsers. If you wish to select which browser to test in, the browser name (firefox, chrome) must be described in the codecept.conf.js file in function: browser.
* Headless mode is only available for chrome and is enabled by uncommenting the line `chromeOptions: {args: [" --headless "," --disable-gpu "," --window-size = 1024, 768 "," --no-sandbox "]}` which is inside the function: `desiredCapabilities: {}`.

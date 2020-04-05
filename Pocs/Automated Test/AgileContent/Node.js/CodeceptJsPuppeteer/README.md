# CodeceptJS with Puppeteer
This program is a Web Testing Automation POC using framework CodeceptJS with Puppeteer


## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). 
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
Note that CodeceptJS requires Node.js version 8.09 or later.

## Install

### Cloning The GitHub Repository
The recommended way to get this program is to use git to directly clone the CodecepJS-Puppeteer repository:
```bash
$ git clone git@github.com:agilecontent/qa.git
```

### Install
Run this command in the application folder from the command-line:
```bash
$ npm install
```

## Run
Let's execute this test with `run` command:
Additional option `--steps` will show us the running process. We recommend use `--steps` or `--debug` during development. 
There is additional option `--verbose` to see more logs.
Run this command in the application folder from the command-line:
```bash
$ npx codeceptjs run
```


## Headless mode

To see the browser, edit 'codecept.conf.js' config and set `show: true` for Puppeteer:
```javascript
{
  "helpers": {
    "Puppeteer": {
      "url": "http://localhost",
      "show": true,
    }
  }
}
```

## Debug

### Step-by-step

Test execution can be paused in any place of a test with `pause()` call:
```javascript
I.amOnPage('/');
pause();
```
You can type in different actions to try them, copy valid successful ones to test, update the test file.
Press ENTER to resume test execution.
To debug test step-by-step type press Enter. The next step will be executed and interactive shell will be shown again.
See more about debug [here](https://codecept.io/basics#debug)

### IDE - Visual Studio code
If you are using the Visual Studio Code IDE, simply press the F5 key, or navigate to the Debug > Start Debugging tab.


## Useful links

* [CodeceptJS homepage](https://codecept.io/)
* [CodeceptJS Quickstart](https://codecept.io/quickstart)
* [Testing with Puppeteer](https://codecept.io/puppeteer/)
* [Driver Helpers - Puppeteer](https://codecept.io/helpers/Puppeteer/#puppeteer)
* [Web Testing - Basics](https://codecept.io/basics)
* [How to use locators with CodeceptJS](https://codecept.io/locators)
* [CodeceptJS Forum](https://codecept.discourse.group)
* [CodeceptJS GitHub](https://github.com/Codeception/CodeceptJS)
* [Good article](https://codeburst.io/customising-codeceptjs-e2e-tests-1a2bf5f32f51)

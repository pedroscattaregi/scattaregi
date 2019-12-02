# Selenium Webdriver with Mocha
This program is a Web Testing Automation POC using Selenium Webdriver with Mocha

## Prerequisites
* Git - [Download & Install Git](https://git-scm.com/downloads). 
* Node.js version 10.16.3 or later - [Download & Install Node.js](https://nodejs.org/en/download/).

## Cloning The GitHub Repository
Open terminal. Clone qa repository:
```bash
$ git clone git@github.com:agilecontent/qa.git
```

## Install dependencies
Open terminal, navigate to `Pocs/Node.js/SeleniumMocha/` folder. Execute command: 
```bash
$ npm install
```

## Execute
Open terminal, navigate to `Pocs/Node.js/SeleniumMocha/` folder. Execute command: 
```bash
$ npm start
```

## Execute Playlist
Open terminal, navigate to `Pocs/Node.js/SeleniumMocha/` folder. Execute a command like this: 
```bash
node_modules\.bin\mocha .\test\gvp-tests.js --grep="BlackoutCollectionsTests.Edit|BlackoutCollectionsTests.Create|BlackoutCollectionsTests.Delete"
```

## Execute Headless
- Open `config/config.js` file; 
- Change `headless: false` to `headless: true`; 
- Save file.

## Execute Firefox
- Open `config/config.js` file; 
- Change `browser: 'chrome'` to `browser: 'firefox'`; 
- Save file.
Important: You need Firefox browser instaled on machine.

## Debug
* Download Visual Studio Code [https://code.visualstudio.com](https://code.visualstudio.com);
* Open Visual Studio Code;
* Click `File`- `Open Folder` - then, select `SeleniumMocha/` folder;
* Press `[F5]` key to start debug mode;

## Run tests from Visual Studio Code Sidebar
* Install Mocha sidebar plugin from Visual Studio Code;
* Click Test button to show Test Sidebar;
* Choose test and click Run button;

## Useful links
* [seleniumhq.github.io](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
* [node selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
* [mochajs.org](https://mochajs.org/)


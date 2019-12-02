let chromeDriveBuilder = require('./chrome-drive-builder');
let firefoxDriveBuilder = require('./firefox-drive-builder'); 
const config = require('../config/config');

const driverFactory = {
  build: () => {
    if (config.browser === 'chrome') {
      return chromeDriveBuilder.build();
    }
    if (config.browser === 'firefox') {
      return firefoxDriveBuilder.build();
    }    
    throw `browser not found: ${config.browser}`;
  }
};

module.exports = driverFactory;
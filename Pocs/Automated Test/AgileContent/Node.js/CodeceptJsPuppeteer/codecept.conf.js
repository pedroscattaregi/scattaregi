exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://juegos-staging.personal.com.ar',
      show: true,
	    waitForNavigation: "networkidle0",
	    windowSize: "1024x768",
	    chrome: {
		    ignoreHTTPSErrors: true
      }
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/mainPage.js',
    misContenidosPage: './pages/misContenidosPage.js',
    loginIframeFragment: './fragments/loginIframeFragment.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJsPuppeteer'
}
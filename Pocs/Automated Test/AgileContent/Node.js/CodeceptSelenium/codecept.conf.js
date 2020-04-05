exports.config = {
    tests: './tests/*_test.js',
    output: './output',
    plugins: {
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        }
    },
    helpers: {
        WebDriver: {
            desiredCapabilities: {
                "acceptInsecureCerts": true,
                // firefoxOptions: { args: [  "--headless" /*, "--disable-gpu", "--window-size=1024,768", "--no-sandbox" */]}
            },
            url: 'https://juegos-staging.personal.com.ar',
            browser: 'firefox',
            windowSize: '1024,768',
            restart: false

        },
    },
    include: {
        I: './steps_file.js',
        mainPage: './pages/mainPage.js',
        misContenidos: './pages/misContenidos.js',
        logInFrame: './fragments/logInFrame.js'
    },
    bootstrap: null,
    mocha: {},
    name: '.bin'
}
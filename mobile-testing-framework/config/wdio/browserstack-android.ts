import { register } from "ts-node";
import { environment } from '@root/config/environment';
import { report } from '@root/config/report';

let cucumberTags = '';

if (environment.CUCUMBER_TAGS_EXPRESSION != cucumberTags) {
  cucumberTags = `@two-factor-authentication or (${environment.CUCUMBER_TAGS_EXPRESSION || ''})`;
}

exports.config = {
  user: environment.BROWSERSTACK_USER,
  key: environment.BROWSERSTACK_KEY,
  services: [
    ['browserstack', {
      preferScenarioName: true,
    }]
  ],
  specs: [
    './src/features/setup/two-factor-authentication.feature',
    './src/features/squads/**/*.feature'
  ],
  exclude: [],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 1,
    platformName: environment.PLATFORM_NAME,
    deviceName: environment.DEVICE_NAME,
    app: environment.APP_PATH,
    automationName: environment.AUTOMATION_NAME,
    autoAcceptAlerts:true,
    build: environment.BROWSERSTACK_BUILD,
    'browserstack.debug': true,
    'browserstack.realMobile': true,
  }],
  logLevel: 'debug',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: environment.COMMANDS_WAIT_FOR_TIMEOUT,
  connectionRetryTimeout: environment.CONNECTION_RETRY_TIMEOUT,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: report.REPORTERS,
  cucumberOpts: {
    requireModule: [
      'tsconfig-paths/register',
      (): void => { register({
        files: true,
        transpileOnly: true,
        project: './tsconfig.json'
      }); }
    ],
    require: ['./src/features/**/*.ts'],
    backtrace: true,
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: cucumberTags,
    timeout: environment.CUCUMBER_STEP_TIMEOUT,
    ignoreUndefinedDefinitions: false
  },
  
};
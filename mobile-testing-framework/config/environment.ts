import dotenv from "dotenv";

dotenv.config();
const args = process.env;

export const environment = {
  PLATFORM_NAME: args.platformName,
  PLATFORM_VERSION: args.platformVersion,
  DEVICE_NAME: args.deviceName,
  APP_PATH: args.appPath,
  SCREENSHOT_PATH: args.screenshotPath,
  AUTOMATION_NAME: args.automationName,
  CUCUMBER_STEP_TIMEOUT: Number(args.cucumberStepTimeout),
  CUCUMBER_TAGS_EXPRESSION: args.cucumberTagExpression,
  GENERATES_CUCUMBER_REPORTER: Boolean(Number(args.generatesCucumberHtmlReporter)) || false,
  COMMANDS_WAIT_FOR_TIMEOUT: Number(args.commandsWaitforTimeout),
  CONNECTION_RETRY_TIMEOUT: Number(args.connectionRetryTimeout),
  BROWSERSTACK_USER: args.browserstackUser || '',
  BROWSERSTACK_KEY: args.browserstackKey || '',
  BROWSERSTACK_BUILD: args.browserstackBuild,
};

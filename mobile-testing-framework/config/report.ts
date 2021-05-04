import dotenv from "dotenv";
import getReportersValue from '@root/src/utils/reporter/reporters-to-be-generated';

dotenv.config();
const args = process.env;

export const report = {

  BROWSERSTACK_BUILD: args.browserstackBuild || '',
  REPORT_TITLE: args.reportTitle || '',
  APP_VERSION: args.appVersion || '',
  ENVIRONMENT: args.environment || '',
  PLATFORM_NAME: args.platformName || '',
  EXECUTION: args.executed || '',
  REPORTERS: getReportersValue(),
};
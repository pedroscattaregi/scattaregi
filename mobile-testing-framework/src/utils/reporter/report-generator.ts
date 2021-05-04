import { consts } from '@root/config/consts';
import * as reporter from 'cucumber-html-reporter';
import { BrowserstackApiClient } from "@root/src/utils/browserstack-api/browsestack-api";
import { report } from '@root/config/report';
import { environment } from '@root/config/environment';

interface OptionsType {
  theme: "hierarchy" | "bootstrap" | "foundation" | "simple";
  jsonDir: string;
  output: string;
  reportSuiteAsScenarios: boolean;
  scenarioTimestamp: boolean;
  ignoreBadJsonFile: boolean;
  launchReport: boolean;
  name: string | undefined;
  brandTitle: string;
  columnLayout: number;
  metadata: { [key: string]: string };
}

(async (): Promise<void> => {
  if (environment.GENERATES_CUCUMBER_REPORTER === true) {
    const browserstackApiClient = new BrowserstackApiClient();
    const buildUrl = await browserstackApiClient.getBuildUrl(report.BROWSERSTACK_BUILD);
    
    //const executionTime = 
    const options: OptionsType = {
      theme: "hierarchy",
      jsonDir: consts.jsonReporterPath,
      output: consts.htmlReporterPath,
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      ignoreBadJsonFile: true,
      launchReport: true,
      name: report.REPORT_TITLE,
      brandTitle: consts.reportToolName,
      columnLayout: consts.reportFeaturecolumns,
      metadata: {
        "App Version": report.APP_VERSION,
        "Environment": report.ENVIRONMENT,
        "Platform": report.PLATFORM_NAME,
        "Executed": report.EXECUTION,
        "Evidences": `<a href="${buildUrl}" target="blank">browserstack build</a>`,
      }
    };
    
    reporter.generate(options);
  } else {
    console.info('Report was set to not be generated in .env var generatesCucumberHtmlReporter');
  }
  
})();

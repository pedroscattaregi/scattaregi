import { environment } from '@root/config/environment';

type CucumberJsonReporter = (string | { jsonFolder: string; language: string })[];

const getReportersValue = (): (string | CucumberJsonReporter )[] => {

  const reportersValue: (string | CucumberJsonReporter )[] = [
    'spec'
  ];

  if (environment.GENERATES_CUCUMBER_REPORTER === true) {
    reportersValue.push(
      [
        'cucumberjs-json', {
          jsonFolder: './report/jsonFiles',
          language: 'en',
        },
      ]
    );
  }
  return reportersValue;
};

export default getReportersValue;
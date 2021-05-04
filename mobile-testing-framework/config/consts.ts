export const consts = {
  defaultOtpCode: '0000',
  // used only for reset/change pin tests
  newPinValue: '3728',
  wrongPinValue: '3829',
  // to increase BDD step timeout in big steps
  timeoutMultiplier: 2,
  // array treatments
  initialArrayIndex: 0,
  lastIndexOffset: -1,
  // HTTP requests
  defaultLimit: 100,
  // report
  jsonReporterPath: './report/jsonFiles',
  htmlReporterPath: './report/report.html',
  reportToolName: "MTF",
  reportFeaturecolumns: 1,
  msToSeconds: 1000,
  //json treatment
  jsonSpaces: 2,
};

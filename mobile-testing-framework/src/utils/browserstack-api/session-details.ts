import { webdriver } from "@root/src/utils/webdriver/webdriver";
import { HookScenarioResult } from "cucumber";
import { readFileSync } from "fs";

export class SessionDetails {
  private sessionId: string;
  private sessionName: string;
  private sessionStatus: string;

  public constructor(Scenario: HookScenarioResult) {
    
    const id = webdriver.getSessionId();
    const featureFilePath = Scenario.sourceLocation.uri;
    const featureFile = readFileSync(featureFilePath, {encoding: "utf-8"});
    const featureNameIndex = 1;
    const featureName = featureFile.split('\n')[featureNameIndex].replace('Feature: ' || 'Feature:', '');
    const status = Scenario.result.status;

    this.sessionId = id;
    this.sessionName = featureName;
    this.sessionStatus = status;
  }

  public get id(): string {
    return this.sessionId;
  }

  public get name(): string {
    return this.sessionName;
  }

  public get status(): string {
    return this.sessionStatus;
  }
}
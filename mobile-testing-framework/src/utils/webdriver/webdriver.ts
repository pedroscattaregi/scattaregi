import { DriverElement } from "./driver-element";

class Webdriver {
  public async getElement(identifier: string): Promise<DriverElement> {
    const element = await $(`~${identifier}`);
    return element;
  }

  public async getElementByXpath(identifier: string): Promise<DriverElement> {
    const element = await $(`${identifier}`);
    return element;
  }

  public async getElementInVerticalScrollView(identifier: string): Promise<DriverElement> {
    let element = await $(`~${identifier}`);
        
    while (element.elementId === undefined) {
      await driver.touchPerform([
        { action: 'press', options: { x: 0.5, y: 0.6 }}, //x and y are the coordinates of the action in the screen in %
        { action: "wait", options: { mseconds: 100 } },
        { action: 'moveTo', options: { x: 0.5, y: 0.4 }},
        { action: 'release' }
      ]);
      element = await $(`~${identifier}`);
    }
    return element;
  }

  public async getElementInHorizontalScrollView(elementIdentifier: string, scrollViewIdentifier: string): Promise<DriverElement> {
    const scrollView = await $(`~${scrollViewIdentifier}`);
    const scrollViewPosition = (await scrollView.getLocation()).y;
    let element = await $(`~${elementIdentifier}`);
        
    while (element.elementId === undefined) {
      await driver.touchPerform([
        { action: 'press', options: { x: 0.6, y: scrollViewPosition }}, //x and y are the coordinates of the action in the screen in %
        { action: "wait", options: { mseconds: 100 } },
        { action: 'moveTo', options: { x: 0.4, y: scrollViewPosition }},
        { action: 'release' }
      ]);
      element = await $(`~${elementIdentifier}`);
    }
    return element;
  }

  public async takeScreenshot(): Promise<string> {
    return await browser.takeScreenshot();  
  }

  public getSessionId(): string {
    return browser.sessionId;
  }
  
}

export const webdriver = new Webdriver();

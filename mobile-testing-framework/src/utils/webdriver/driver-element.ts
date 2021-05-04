export interface DriverElement {
  click: () => Promise<void>;
  waitForExist: () => Promise<boolean>;
  setValue: (value: string | number | boolean | object | void[]) => Promise<void>;
  getText: () => Promise<string>;
}



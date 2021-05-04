export abstract class BasePage {
  public pageTitle: string;

  public constructor() {
    this.pageTitle = 'Page';
  }

  abstract checkRequiredPageElements(): Promise<void>;
}
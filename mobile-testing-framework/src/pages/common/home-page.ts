import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class HomePage extends BasePage {

  private readonly homeWrapperElement = 'dashboard-home';
  private readonly menuButtonElement = 'header-menu-button';
  private readonly notificationsButtonElement = 'header-notifications-button';
  private readonly homeBottomMenuElement = 'bottom-menu-navigation-bar';
  private readonly balanceElement = '(//*[@content-desc="dashboard-home"]//*[contains(@text, "R$")])[1]';
  private readonly horizontalScrollableViewElement = 'horizontal-scrollable-view';
  // private readonly pixCardActionElement = 'pix-card-button';
  // private readonly depositCardActionElement = 'deposit-card-button';
  // private readonly withdrawCardActionElement = 'withdraw-card-button';
  private readonly transferCardActionElement = 'transfer-card-button';

  public get homeScrollView(): Promise<DriverElement> {
    return webdriver.getElement(this.homeWrapperElement);
  }

  private get menuButton(): Promise<DriverElement> {
    return webdriver.getElement(this.menuButtonElement);
  }

  private get notificationsButton(): Promise<DriverElement> {
    return webdriver.getElement(this.notificationsButtonElement);
  }

  private get homeBottomMenu(): Promise<DriverElement> {
    return webdriver.getElement(this.homeBottomMenuElement);
  }

  private get balance(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.balanceElement);
  }

  private get horizontalScrollableView(): Promise<DriverElement> {
    return webdriver.getElement(this.horizontalScrollableViewElement);
  }

  private get transferCardAction(): Promise<DriverElement> {
    return webdriver.getElementInHorizontalScrollView(this.transferCardActionElement, this.horizontalScrollableViewElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.homeScrollView).waitForExist();
    await (await this.menuButton).waitForExist();
    await (await this.notificationsButton).waitForExist();
    await (await this.homeBottomMenu).waitForExist();
    await (await this.horizontalScrollableView).waitForExist();
  }
  
  public async openMenu(): Promise<void> {
    const button = await this.menuButton;
    await button.click();
  }

  public async getBalanceAmount(): Promise<string> {
    const balance = await this.balance;
    return balance.getText();
  }

  public async accessTransferSection(): Promise<void> {
    const button = await this.transferCardAction;
    await button.click();
  }

}

export default new HomePage();
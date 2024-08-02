import HomePageObjectsMobile from '../../page_objects/mobile/homePageObjectsMobile';
import MobilePage from './mobile.Page';
import { browser } from '@wdio/globals';

export default class HomePage extends MobilePage {

  constructor() {
    super();
  }
  private object: HomePageObjectsMobile = new HomePageObjectsMobile();

  public async clickOnAccessibility(): Promise<void> {
    await this.click(await this.object.labelAccessibility);

  }

  public async clickOnAccessibilityServiceAndMoveBack(): Promise<void> {
    await this.click(await this.object.labelAccessibilityServices);
    await browser.pause(5000);
    await this.moveBack();

    await browser.pause(5000);
    await this.moveBack();


  }

  public async verifyAccessibilityTab(): Promise<void> {

    const isVisible= await this.isElementDisplayed(await this.object.labelAccessibility);
    if (isVisible) {
      console.log('Element is displayed.');
    } else {
      console.log('Element is not displayed.');
    }

  }

  public async clickOnApp(): Promise<void> {
    await this.click(await this.object.labelApp);
  }

  public async clickOnAppAndMoveBAck(): Promise<void> {
    await this.object.labelApp.click();
  }



}
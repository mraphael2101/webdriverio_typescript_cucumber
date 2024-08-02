import Page from '../../pages-actions/web/Page';
import GoogleHomePageObjects from '../../page-objects/web/GoogleHomePageObjects';

export default class GoogleHomePageActions extends Page {

  constructor() {
    super();
  }

  private objects: GoogleHomePageObjects = new GoogleHomePageObjects();


  public async open(path?: string) {
    await browser.url('https://www.google.com');
    await  browser.fullscreenWindow();
  }

  public async acceptPrivacyPolicy(btnCaption: string): Promise<void> {
    let modelDisplayed = this.objects.modelFrame.isDisplayed();
    if (modelDisplayed) {
      if (btnCaption.toLowerCase() === 'accept all') {
      //  await this.objects.buttonAcceptAll.click();
        await this.click(await this.objects.buttonAcceptAll);
      }
      if (btnCaption.toLowerCase() === 'reject all') {
        await this.click(await this.objects.buttonRejectAll);
      }
    }
  }

  public async searchAndGetFirstLink(searchQuery: string) {
    await this.objects.inputSearchBar.waitForDisplayed({timeout:5000});
    await this.typeInto(await this.objects.inputSearchBar,searchQuery)
   // await this.objects.inputSearchBar.setValue(searchQuery);
  //  await browser.pause(4000); // _09a_ts_implicit_wait wait
    await browser.keys('Enter');
  //  await this.objects.linkFirstSearchResult.click();
    //await  this.click(await this.objects.linkFirstSearchResult);
  //  await browser.pause(4000);
  }

  public async getFirstResultText() {
    await this.objects.linkFirstSearchResult.click();
    await browser.pause(4000);
  //  return await  this.objects.textFirstResult.getText();
   // return firstResult.getText();
  }
}

import Page from './Page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class GoogleHomePage extends Page {
    /**
     * define selectors using getter methods
     */
    private readonly searchBarEle = $('[name="q"]');
    private readonly searchButtonEle = $('[name="btnK"]');

    constructor() {
        super();
    }

    public open(url: string) {
        console.log("An overridden method")
        return super.open(url);
    }

    public get searchButton(): Promise<WebdriverIO.Element> {
        return this.searchButtonEle;
    }

    public async search(searchQuery: string) {
        await this.searchBarEle.waitForDisplayed({timeout: 5000});
        await this.searchBarEle.setValue(searchQuery);
    }

    public async getFirstResultText(): Promise<string> {
        const firstResult = await $('#search .g:first-child');
        return firstResult.getText();
    }
}

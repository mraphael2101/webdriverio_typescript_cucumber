/**
 * The inbuilt Page class in WDIO provides a base class for creating page objects.
 * It provides a number of methods and properties that can be used to interact
 * with the web page that is shared across all page objects
 */
export default class Page {

    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    public async open(path?: string) {
        return await browser.url('https://www.google.com');
    }

    public async click(ele: WebdriverIO.Element) {
        await ele.waitForClickable({timeout: 5000});
        if (!ele.elementId) {
            throw Error(ele.error.message);
        }
        await ele.click();
    }

    public async typeInto(ele: WebdriverIO.Element, text: string) {
        await ele.waitForDisplayed({timeout: 5000});
        if (!ele.elementId) {
            throw Error(ele.error.message);
        }
        await ele.setValue(text);
    }

}

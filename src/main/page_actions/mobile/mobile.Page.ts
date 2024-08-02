import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class MobilePage {
    /**
     * Opens a sub-page of the page
     * @param path path of the sub-page (e.g. /path/to/page.html)
     */
    public open(path: string) {

        return browser.url(`https://the-internet.herokuapp.com/${path}`)

    }

    public async click(ele: WebdriverIO.Element) {

        await ele.waitForDisplayed({ timeout: 5000});
        if (!ele.elementId) {
            throw Error(ele.error.message);
        }
        await ele.click();
    }

    /**
     * Generic method to perform swipe actions.
     * @param startX Starting x-coordinate.
     * @param startY Starting y-coordinate.
     * @param endX Ending x-coordinate.
     * @param endY Ending y-coordinate.
     * @param duration Duration of the swipe action.
     */
    private async _swipe(startX: number, startY: number, endX: number, endY: number, duration: number) {
        await browser.touchAction([
            { action: 'press', x: startX, y: startY },
            { action: 'wait', ms: duration },
            { action: 'moveTo', x: endX, y: endY },
            { action: 'release' }
        ]);
    }

    /**
     * Swipes up on the screen.
     * @param duration Duration of the swipe action.
     */
    public async swipeUp(duration = 500) {
        const windowSize = await browser.getWindowSize();
        const anchor = windowSize.width / 2;
        const startPoint = windowSize.height * 0.8;
        const endPoint = windowSize.height * 0.2;

        await this._swipe(anchor, startPoint, anchor, endPoint, duration);
    }

    /**
     * Swipes down on the screen.
     * @param duration Duration of the swipe action.
     */
    public async swipeDown(duration = 500) {
        const windowSize = await browser.getWindowSize();
        const anchor = windowSize.width / 2;
        const startPoint = windowSize.height * 0.2;
        const endPoint = windowSize.height * 0.8;

        await this._swipe(anchor, startPoint, anchor, endPoint, duration);
    }

    /**
     * Swipes left on the screen.
     * @param duration Duration of the swipe action.
     */
    public async swipeLeft(duration = 500) {
        const windowSize = await browser.getWindowSize();
        const anchor = windowSize.height / 2;
        const startPoint = windowSize.width * 0.8;
        const endPoint = windowSize.width * 0.2;

        await this._swipe(startPoint, anchor, endPoint, anchor, duration);
    }

    /**
     * Swipes right on the screen.
     * @param duration Duration of the swipe action.
     */
    public async swipeRight(duration = 500) {
        const windowSize = await browser.getWindowSize();
        const anchor = windowSize.height / 2;
        const startPoint = windowSize.width * 0.2;
        const endPoint = windowSize.width * 0.8;

        await this._swipe(startPoint, anchor, endPoint, anchor, duration);
    }

    /**
     * Navigates back in the app.
     */
    public async moveBack() {
        await browser.back();
    }

    /**
     * Scrolls to the element.
     * @param ele WebdriverIO.Element to be scrolled to.
     */
    public async scrollToElement(ele: WebdriverIO.Element) {
        await ele.scrollIntoView();
    }

    /**
     * Wait for an element to be visible.
     * @param ele WebdriverIO.Element to wait for.
     * @param timeout Timeout duration.
     */
    public async waitForElementVisible(ele: WebdriverIO.Element, timeout = 5000) {
        await ele.waitForDisplayed({ timeout });
    }

    /**
     * Check if an element is displayed.
     * @param ele WebdriverIO.Element to check.
     * @returns Boolean indicating if the element is displayed.
     */
    public async isElementDisplayed(ele: WebdriverIO.Element) {
        return ele.isDisplayed();
    }

    /**
     * Input text into a text field.
     * @param ele WebdriverIO.Element to input text into.
     * @param text Text to be inputted.
     */
    public async inputText(ele: WebdriverIO.Element, text: string) {
        await ele.setValue(text);
    }

    /**
     * Get text from an element.
     * @param ele WebdriverIO.Element to get text from.
     * @returns Text content of the element.
     */
    public async getText(ele: WebdriverIO.Element) {
        return ele.getText();
    }

    /**
     * Take a screenshot of the current screen.
     * @param fileName Name of the file to save the screenshot.
     */
    public async takeScreenshot(fileName: string) {
        await browser.saveScreenshot(fileName);
    }

    /**
     * Tap on an element.
     * @param ele WebdriverIO.Element to be tapped.
     */
    public async tapElement(ele: WebdriverIO.Element) {
        await browser.touchAction({ action: 'tap', element: ele });
    }

    /**
     * Long press on an element.
     * @param ele WebdriverIO.Element to be long pressed.
     * @param duration Duration of the long press action.
     */
    public async longPressElement(ele: WebdriverIO.Element, duration = 1000) {
        await browser.touchAction([
            { action: 'press', element: ele },
            { action: 'wait', ms: duration },
            { action: 'release' }
        ]);
    }

    /**
     * Drag and drop an element from one location to another.
     * @param sourceEle WebdriverIO.Element to drag.
     * @param targetEle WebdriverIO.Element to drop onto.
     */
    public async dragAndDrop(sourceEle: WebdriverIO.Element, targetEle: WebdriverIO.Element) {
        await sourceEle.dragAndDrop(targetEle);
    }


}

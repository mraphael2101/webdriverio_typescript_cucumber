/**
 * The inbuilt MobilePage class in WDIO provides a base class for creating
 * page objects. It provides a number of methods and properties that
 * can be used to interact with the web page that is shared across all
 * page objects
 */
export default class Page {
  /**
   * Opens a sub-page of the page
   * @param path path of the sub-page (e.g. /path/to/page.html)
   */


/*  public async open(path?: string) {
    return await browser.url('https://www.google.com') ;
  }*/

  /**
   * Clicks on the provided element.
   * @param ele WebdriverIO.Element to be clicked.
   */
  public async click(ele: WebdriverIO.Element) {
    await ele.waitForClickable({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.click();
  }

  /**
   * Types text into the provided element.
   * @param ele WebdriverIO.Element to type into.
   * @param text Text to be entered.
   */
  public async typeInto(ele: WebdriverIO.Element, text: string) {
    await ele.waitForDisplayed({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.setValue(text);
  }

  /**
   * Gets text from the provided element.
   * @param ele WebdriverIO.Element to get text from.
   * @returns Promise<string> The text content of the element.
   */
  public async getText(ele: WebdriverIO.Element): Promise<string> {
    await ele.waitForDisplayed({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    return await ele.getText();
  }

  /**
   * Selects a value from a dropdown element.
   * @param ele WebdriverIO.Element of the dropdown.
   * @param value Value to be selected.
   */
  public async selectDropdownValue(ele: WebdriverIO.Element, value: string) {
    await ele.waitForDisplayed({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.selectByVisibleText(value);
  }

  /**
   * Gets an attribute from the provided element.
   * @param ele WebdriverIO.Element to get attribute from.
   * @param attribute Name of the attribute.
   * @returns Promise<string> The attribute value.
   */
  public async getAttribute(
    ele: WebdriverIO.Element,
    attribute: string,
  ): Promise<string> {
    await ele.waitForDisplayed({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    return await ele.getAttribute(attribute);
  }

  /**
   * Waits for an element to be displayed.
   * @param ele WebdriverIO.Element to wait for.
   * @param timeout Timeout in milliseconds.
   */
  public async waitForElement(
    ele: WebdriverIO.Element,
    timeout: number = 5000,
  ) {
    await ele.waitForDisplayed({ timeout });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
  }

  /**
   * Checks if an element is displayed.
   * @param ele WebdriverIO.Element to check.
   * @returns Promise<boolean> True if displayed, false otherwise.
   */
  public async isDisplayed(ele: WebdriverIO.Element): Promise<boolean> {
    await ele.waitForDisplayed({ timeout: 5000 });
    return ele.isDisplayed();
  }

  /**
   * Checks if an element is enabled.
   * @param ele WebdriverIO.Element to check.
   * @returns Promise<boolean> True if enabled, false otherwise.
   */
  public async isEnabled(ele: WebdriverIO.Element): Promise<boolean> {
    await ele.waitForDisplayed({ timeout: 5000 });
    return ele.isEnabled();
  }

  /**
   * Checks if an element is selected.
   * @param ele WebdriverIO.Element to check.
   * @returns Promise<boolean> True if selected, false otherwise.
   */
  public async isSelected(ele: WebdriverIO.Element): Promise<boolean> {
    await ele.waitForDisplayed({ timeout: 5000 });
    return ele.isSelected();
  }

  /**
   * Clears the value of an input field.
   * @param ele WebdriverIO.Element to clear.
   */
  public async clearInput(ele: WebdriverIO.Element) {
    await ele.waitForDisplayed({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.clearValue();
  }

  /**
   * Moves the mouse to the specified element.
   * @param ele WebdriverIO.Element to move to.
   */
  public async moveToElement(ele: WebdriverIO.Element) {
    await ele.waitForDisplayed({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.moveTo();
  }

  /**
   * Performs drag and drop from source element to target element.
   * @param source WebdriverIO.Element to drag.
   * @param target WebdriverIO.Element to drop to.
   */
  public async dragAndDrop(
    source: WebdriverIO.Element,
    target: WebdriverIO.Element,
  ) {
    await source.waitForDisplayed({ timeout: 5000 });
    await target.waitForDisplayed({ timeout: 5000 });
    if (!source.elementId || !target.elementId) {
      throw Error(source.error.message || target.error.message);
    }
    await source.dragAndDrop(target);
  }

  /**
   * Takes a screenshot of the current page.
   * @param path Path where the screenshot will be saved.
   */
  public async takeScreenshot(path: string) {
    await browser.saveScreenshot(path);
  }

  /**
   * Waits for an element to be visible.
   * @param ele WebdriverIO.Element to wait for.
   * @param timeout Timeout in milliseconds.
   */
  public async waitForVisible(
    ele: WebdriverIO.Element,
    timeout: number = 5000,
  ) {
    await ele.waitForDisplayed({ timeout });
  }

  /**
   * Waits for an element to be clickable.
   * @param ele WebdriverIO.Element to wait for.
   * @param timeout Timeout in milliseconds.
   */
  public async waitForClickable(
    ele: WebdriverIO.Element,
    timeout: number = 5000,
  ) {
    await ele.waitForClickable({ timeout });
  }

  /**
   * Waits for an element to be invisible.
   * @param ele WebdriverIO.Element to wait for.
   * @param timeout Timeout in milliseconds.
   */
  public async waitForInvisible(
    ele: WebdriverIO.Element,
    timeout: number = 5000,
  ) {
    await ele.waitForDisplayed({ timeout, reverse: true });
  }

  /**
   * Waits for an element to contain a specific text.
   * @param ele WebdriverIO.Element to wait for.
   * @param text Text to wait for.
   * @param timeout Timeout in milliseconds.
   */
  public async waitForText(
    ele: WebdriverIO.Element,
    text: string,
    timeout: number = 5000,
  ) {
    await ele.waitUntil(
      async function () {
        return (await ele.getText()) === text;
      },
      {
        timeout,
        timeoutMsg: `expected text to be different after ${timeout}ms`,
      },
    );
  }
}

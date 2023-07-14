import {Given, Then, When, DataTable} from '@wdio/cucumber-framework';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
/**
 * Web Interactions
 */
Given('I have landed on a GUI Widget Library Examples Web Page - {string}', async (path) => {
    await browser.url("https://the-internet.herokuapp.com/" + path);
    // Wait for up to 15 secs before timeout
    // Wait for 10 secs before page load timeout
    await browser.setTimeout({implicit: 15000, pageLoad: 10000});
});

When('I perform Web Interactions on a Textfield', async () => {
    /**
     * Input box
     * Actions:
     * 1. Type into input box
     * 2. Clear the field and type
     * 3. Click and type
     * 4. Slow typing
     */

    let ele = await $("[type=number]");

    const myString = "12345";

    await ele.click();
// await ele.moveToElement();
// await ele.scrollIntoView();
// await ele.setValue("12345");

// Types the string in a more natural way similar to a human
    for (let i = 0; i < myString.length; i++) {
        let charStr = myString.charAt(i);
        await browser.pause(1000);
        await browser.keys(charStr);
    }

    await ele.addValue("6789");  // Appends the value to the existing string input
    await browser.debug();
});

When('I perform Web Interactions on a Drop-down list', async function () {
    /**
     * Drop-down menu
     * Actions:
     * 1. Assert default option is selected
     * 2. Select by attribute, text, index
     * 3. Get a list of options
     */
    const ddl = await $(`/
    /select/ option[

    @selected="selected"]`);
    let val = ddl.getText();
    console.log(val);
    // This code will wait for the promise to eventually equal the string value
    chai.expect(val).to.eventually.equal("Please select an option");

    // await ddl.selectByAttribute("value","1");
    // await ddl.selectByIndex(0);

    let eleArr = await $$(`select > option`)
    let arr = [];
    // forEach loop does not support the async function so do not use
    for(let i = 0; i < eleArr.length; i++) {
        let ele = eleArr[i];
        let val = await ele.getText();
        arr.push(val);
        console.log(ele.getText());
    }
    console.log(`>> Options Array: ${arr}`);
    await browser.debug();
});
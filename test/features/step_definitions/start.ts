import {Before, Given, Then, When, DataTable, setWorldConstructor} from '@cucumber/cucumber';
import * as chai from 'chai';
import LoginPage from '../../page_objects/GoogleHomePage';

import {MyWorldParams} from "../../helpers/MyWorldParams";

setWorldConstructor(MyWorldParams);

const pages = {
    loginPage: LoginPage,
}

Before(async function(scenario) {
    console.log(scenario.pickle.name) // Prints the Scenario name
});

Given(/^Google page is opened$/, async function() {
    await browser.url("https://www.google.com");
    await browser.pause(2000); // _09a_ts_implicit_wait wait
});

Given(/^I have landed on the Google HomePage$/, async function () {
    await browser.url("https://www.google.com").then(async function() {
        await browser.getUrl()
        // _09a_ts_implicit_wait: Retry to find element every second
        await browser.setTimeout({implicit: 1000, pageLoad: 10000})
    });
});

When('I manipulate cucumber world', async function () {
    // Use reflection to pass single instance to PO
    // let options: IWorldOptions;

    // Constituents of IWorldOptions
    // let attach: ICreateAttachment;
    // let log: ICreateLog;
    // let parameters: any;

    // let myInstance = Reflect.construct(
    //     options,
    //     attach(),
    //     log,
    //     parameters
    // );

    // const s1 = Singleton.getInstance(this.options);

    await this.printColour()
    console.log(this.colour)
});

Given('I click on the {string} button on the Privacy Policy Modal, if Displayed', async (btnCaption) => {
    let modal = await browser.$("div[class='KxvlWc']");
    let modalDisplayed = await modal.isDisplayed();

    if(modalDisplayed) {
        if(btnCaption.toLowerCase() === "accept all") {
            await browser.$("button[id='L2AGLb']").click();
        }
        if(btnCaption.toLowerCase() === "reject all") {
            await browser.$("button[id='W0wltc']").click();
        }
    }
});

Given(/^I setup data$/, function (table: DataTable) {
    const rawExpected : unknown = table.rowsHash()
    const expectedHeaderState = rawExpected as { title: string, subTitle: string }
    console.log(expectedHeaderState)
});

When(/^I search with the keyword (.*)$/, async (searchItem) => {
    console.log(searchItem);
    let ele = await browser.$('[name=q]');
    await ele.setValue(searchItem);
    await browser.pause(1000); // _09a_ts_implicit_wait wait
    await browser.keys("Enter");
});

When('I click on the first search result', async () => {
    let ele = await browser.$('<h3>');
    await ele.click();
});

Then(/^the URL should match the (.*)$/, async(expectedUrl) => {
    console.log(expectedUrl);
    let actualUrl = await browser.getUrl();
    await browser.setTimeout({implicit: 1000, pageLoad: 10000});
    chai.expect(actualUrl).to.equal(expectedUrl);
});

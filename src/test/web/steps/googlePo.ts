import {Before, Given, Then, When, DataTable, setWorldConstructor} from '@cucumber/cucumber';
import * as chai from 'chai';
import LoginPage from '../../../main/page_objects/web/googleHomePage';

import {MyWorldParams} from "../../../main/helpers/MyWorldParams";
import { $, browser } from '@wdio/globals';

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
        await browser.setTimeout({implicit: 1000, pageLoad: 10000})
    });
});

When('I manipulate Cucumber World', async function () {
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
    // Improved waiting strategy
    const maxAttempts = 1;
    for (let i = 0; i < maxAttempts; i++) {
        const searchInput = await $('input[name="q"]');
        if (await searchInput.isDisplayed()) {
            await searchInput.click();
            await searchInput.setValue(searchItem);
            await browser.keys("Enter");
            break;
        }
        await browser.pause(500);
    }
});

When('I click on the first search result', async () => {
    let ele = await browser.$('h3'); // Try targeting h3 for first search result
    await ele.click();
});

Then(/^the URL should match the (.*)$/, async (expectedUrl) => {
    console.log(expectedUrl);
    let actualUrl = await browser.getUrl();
    chai.expect(actualUrl).to.equal(expectedUrl);
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

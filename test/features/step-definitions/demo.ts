import {Before, Given, Then, When, DataTable, setWorldConstructor} from '@wdio/cucumber-framework';

import LoginPage from '../../page-objects/google.home.page';
import {Singleton} from "../../utils/my-singleton-world";
import {IWorldOptions} from "@cucumber/cucumber";
import {ICreateAttachment, ICreateLog} from "@cucumber/cucumber/lib/runtime/attachment_manager";

const pages = {
    loginPage: LoginPage,
}

setWorldConstructor(Singleton)

Before(async function(scenario) {
    console.log(scenario.pickle.name) // Prints the Scenario name
});

Given(/^Google page is opened$/, async function() {
    await browser.url("https://www.google.com");
    await browser.pause(2000); // implicit wait
});

Given(/^I have landed on the Google HomePage$/, async function () {
    await this.printColour()
    console.log(this.colour)

    await browser.url("https://www.google.com").then(async function() {
        await browser.getUrl()
        await browser.setTimeout({implicit: 5000, pageLoad: 2000})
    });

    console.log("a")

});

Given('I click on the {string} button on the Privacy Policy Modal, if Displayed', async (btnCaption) => {
    let modal = await $("div[class='KxvlWc']");
    let modalDisplayed = await modal.isDisplayed();

    if(modalDisplayed) {
        if(btnCaption.toLowerCase() === "accept all") {
            await $("button[id='L2AGLb']").click();
        }
        if(btnCaption.toLowerCase() === "reject all") {
            await $("button[id='W0wltc']").click();
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
    let ele = await $('[name=q]');
    await ele.setValue(searchItem);
    await browser.pause(1000); // implicit wait
    await browser.keys("Enter");
});

When(/^I click on the first search result$/, async () => {
    let ele = await $('<h3>');
    await ele.click();
});

When(/^I do cucumber world manipulation$/, async function () {
    // Use reflection to pass single instance to PO
    let options: IWorldOptions;

    // Constituents of IWorldOptions
    let attach: ICreateAttachment;
    let log: ICreateLog;
    let parameters: any;

    // let myInstance = Reflect.construct(
    //     options,
    //     attach(),
    //     log,
    //     parameters
    // );

    const s1 = Singleton.getInstance(this.options);
});

Then(/^the URL should match the (.*)$/, async(expectedUrl) => {
    console.log(expectedUrl);
});

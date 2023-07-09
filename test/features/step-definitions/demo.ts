import {Given, Then, setWorldConstructor, Before, When, DataTable} from '@wdio/cucumber-framework';

import LoginPage from '../../page-objects/login.page';
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
    // await browser.pause(10000);
});


Given(/^I am on the login page$/, async function () {
    await this.printColour()
    console.log(this.colour)

    await browser.url("https://www.google.com").then(async function() {
        await browser.getUrl()
        await browser.setTimeout({implicit: 5000, pageLoad: 2000})
    });

    console.log("a")

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

Then(/^I should do something else$/, function () {
    console.log("c")
});
Given(/^I setup data$/, function (table: DataTable) {
    const rawExpected : unknown = table.rowsHash()
    const expectedHeaderState = rawExpected as { title: string, subTitle: string }
    console.log(expectedHeaderState)
});

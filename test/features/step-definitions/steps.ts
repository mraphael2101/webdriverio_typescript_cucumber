import {Given, Then, setWorldConstructor, Before, When} from '@wdio/cucumber-framework';

import LoginPage from '../../pageobjects/login.page';
import SecurePage from '../../pageobjects/secure.page';
import {Singleton} from "../../utils/my-singleton-world";
import {IWorldOptions} from "@cucumber/cucumber";

const pages = {
    loginPage: LoginPage,
    securePage: SecurePage
}

setWorldConstructor(Singleton)

Before(async function(scenario) {
    console.log(scenario.pickle.name) // Prints the Scenario name
});

Given(/^I am on the login page$/, async function () {
    await this.printColour()
    console.log(this.colour)

    //await browser.debug()

    await browser.url("https://www.google.com").then(async function() {
        await browser.getUrl()
        await browser.setTimeout({implicit: 5000, pageLoad: 2000})
    });
});

When(/^I do something$/, async function () {
    // Use reflection to pass single instance to PO
    // let options: IWorldOptions;
    // this.options = null;
    // const s1 = Singleton.getInstance(this.options);

    let options: IWorldOptions;
    var result;
    for(var property in this.options) {
        result = await this.options[property]
        console.log(result)
    }

    //this.options = null;
    const s1 = Singleton.getInstance(this.options);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting()
    await expect(SecurePage.flashAlert).toHaveTextContaining(message)
});




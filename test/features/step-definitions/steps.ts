import {Given, When, Then, setWorldConstructor, Before} from '@wdio/cucumber-framework';

import LoginPage from '../../pageobjects/login.page';
import SecurePage from '../../pageobjects/secure.page';
import {MyWorldParams} from "../../utils/my-world-params";

const pages = {
    login: LoginPage
}

setWorldConstructor(MyWorldParams)

Before(async function(scenario) {
    console.log(scenario.pickle.name) // Prints the test name
});

//Given(/^I am on the login page$/, async function (page) {
Given(/^I am on the login page$/, async function () {
    await this.printColour()
    console.log(this.colour)
    //await pages[page].open()

    await browser.url("https://www.google.com")
        .then(async function () {
            const result = await browser.getUrl();
            console.log("THE URL IS : " + result);
    });

    await browser.debug();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


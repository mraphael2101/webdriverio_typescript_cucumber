import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../../pageobjects/login.page';
import SecurePage from '../../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

//Given(/^I am on the login page$/, async function (page) {
Given(/^I am on the login page$/, async function () {
    console.log("hello")
    //await pages[page].open()

    await browser.url("https://www.google.com")
        .then(async function () {
            const result = await browser.getUrl();
            console.log("THE URL IS : " + result);
    });

    await browser.debug();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


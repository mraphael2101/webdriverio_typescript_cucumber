import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../../pageobjects/login.page';
import SecurePage from '../../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

//await browser.url("https://www.google.com");
//await browser.debug();

//Given('I am on the login page', async function (page) {
//    await pages[page].open()
//});

Given(/^I am on the login page$/, async function () {
    console.log("hello")
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


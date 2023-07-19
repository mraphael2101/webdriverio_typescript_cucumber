import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import GoogleHomePage from '../../page_objects/GoogleHomePage';

let googleHomePage;

Given('I am on the Google homepage', async function () {
    googleHomePage = new GoogleHomePage();
    await googleHomePage.open("https://www.google.com");
});

When('I enter {string} in the search bar', async function (searchQuery: string) {
    await googleHomePage.search(searchQuery);
});

When('I click the search button', async function () {
    await googleHomePage.searchButton.click();
});

Then('I should see {string} in the search results', async function (expectedResult: string) {
    const firstResultText = await googleHomePage.getFirstResultText();
    console.log(firstResultText)
    expect(firstResultText).to.include(expectedResult);
});

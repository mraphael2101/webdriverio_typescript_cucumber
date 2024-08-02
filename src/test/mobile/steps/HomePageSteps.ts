import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, driver } from '@wdio/globals';

import LoginPage from '../../../main/page_actions/mobile/login.Page'
import SecurePage from '../../../main/page_actions/mobile/secure.Page';
import HomePageActionsMobile from '../../../main/page_actions/mobile/homePage';

const  homePageActionsMobile = new HomePageActionsMobile();

const pages = {
  login: LoginPage
}


Given(/^I am on the login page$/, async () => {
  await driver.pause(5000)
  console.log("waited for 5 second");
  const appOption = await $('~App');
  await appOption.click();

  const alarmOption = await $('~Alarm');
  await alarmOption.click();

  await driver.pause(5000);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given(/^I am on the front Page$/, async () => {
  await driver.pause(5000)
  // console.log("waited for 5 second");
  // const appOption = await $('~App');
  // await appOption.click();
  //
  // const alarmOption = await $('~Alarm');
  // await alarmOption.click();
  //
  // await driver.pause(5000);


});Given(/^I am on the front Page1$/, async () => {
  await driver.pause(5000)
  console.log("waited for 5 second");
  const appOption = await $('~App');
  await appOption.click();
  const alarmOption = await $('~Alarm');
  await alarmOption.click();
  await driver.pause(5000);
});

Given(/^I navigated to Accessibility$/, async () => {
  await homePageActionsMobile.clickOnAccessibility();
});


Then(/^I navigated to Accessibility Service and move back$/, async () => {
  await homePageActionsMobile.clickOnAccessibilityServiceAndMoveBack();
});


Given(/^I verify Accessibility Tab is Visible$/, async () => {
  await homePageActionsMobile.verifyAccessibilityTab();
});

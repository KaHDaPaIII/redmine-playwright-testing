const { test, expect } = require('@playwright/test');
const { RedmineHomePage } = require('./pageobjects/redmine-home-page.js');
const { RedmineRegisterPage } = require('./pageobjects/redmine-register-page.js');
const { UserCredentials } = require('./my-functions/generate-credentials.js');

test('Register with valid random generated credentials.', async ({ page }) => {
    const homePage = new RedmineHomePage(page);
    const registerPage = new RedmineRegisterPage(page);
    const testuser = new UserCredentials();

    await homePage.goto();
    await homePage.clickRegister();
    await registerPage.register(testuser.username, testuser.password, undefined, testuser.firstname, testuser.lastname, testuser.email); 

    await expect(page).toHaveURL('https://www.redmine.org/login');
    await expect(page.locator('#flash_notice')).toBeVisible();
})

test('Register with blank form.', async ({ page }) => {
    const homePage = new RedmineHomePage(page);
    const registerPage = new RedmineRegisterPage(page);
    
    await homePage.goto();
    await homePage.clickRegister();
    await registerPage.register('', '', '', '', '', '');

    await expect(page.locator('#errorExplanation')).toBeVisible();
})
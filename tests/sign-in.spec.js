const { test, expect } = require('@playwright/test');
const { RedmineHomePage } = require('./pageobjects/redmine-home-page.js');
const { RedmineLoginPage } = require('./pageobjects/redmine-login-page.js');
const { login, password } = require('./my-functions/credentials.js');
const { UserCredentials } = require('./my-functions/generate-credentials.js');

test('Sign in with valid credentials.', async ({ page }) => {
    const homePage = new RedmineHomePage(page);
    const loginPage = new RedmineLoginPage(page);
    
    await homePage.goto();
    await homePage.clickSignIn();
    await loginPage.login(login, password);
    
    await expect.soft(page.locator('#loggedas')).toBeVisible();
    await expect.soft(page.locator('#loggedas > a')).toHaveText(login);
})

test('Sign in with not valid (random generated) credentials.', async ({ page }) => {
    const homePage = new RedmineHomePage(page);
    const loginPage = new RedmineLoginPage(page);
    const testuser = new UserCredentials();

    await homePage.goto();
    await homePage.clickSignIn();
    await loginPage.login(testuser.username, testuser.password);

    await expect(page.locator('#flash_error')).toBeVisible();
})

test('“Stay logged in” is working', async ({ page }) => {
    const homePage = new RedmineHomePage(page);
    const loginPage = new RedmineLoginPage(page);
    
    await homePage.goto();
    await homePage.clickSignIn();
    await loginPage.login(login, password, true);
    const newPage = await page.context().newPage();
    await page.close();
    await newPage.goto('https://www.redmine.org/');

    await expect(newPage.locator('#loggedas')).toBeVisible();
    await expect(newPage.locator('#loggedas > a')).toHaveText(login);
})

const { test, expect } = require('@playwright/test');
const emails = require('email-generator');
const { randomString } = require('../my-functions/my-function');

test('Register with valid random generated credentials.', async ({ page }) => {
    await page.goto('https://www.redmine.org/');
    await page.locator('[href="/account/register"]').click();
    const login = randomString(8);
    await page.locator('#user_login').fill(login);
    console.log(login);
    const password = randomString(16);
    await page.locator('#user_password').fill(password);
    await page.locator('#user_password_confirmation').fill(password);
    console.log(password);
    const firstName = randomString(8);
    const lastName = randomString(8);
    await page.locator('#user_firstname').fill(firstName);
    await page.locator('#user_lastname').fill(lastName);
    console.log(firstName);
    console.log(lastName);
    const email = emails.generateEmail()
    await page.locator('#user_mail').fill(email);
    console.log(email);
    await page.locator('[type="submit"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/login');
    await expect(page.locator('#flash_notice')).toBeVisible();
})

test('Register with blank form.', async ({ page }) => {
    await page.goto('https://www.redmine.org/');
    await page.locator('[href="/account/register"]').click();
    await page.locator('[type="submit"]').click();
    await expect(page.locator('#errorExplanation')).toBeVisible();
})
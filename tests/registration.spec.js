const { test, expect } = require('@playwright/test');
const emails = require('email-generator');
const { randomString } = require('../my-functions/my-function');

test('Register with valid random generated credentials.', async ({ page }) => {
    await page.goto('https://www.redmine.org/');
    await page.locator('[href="/account/register"]').click();
    await page.locator('#user_login').fill(randomString(8));
    const password = randomString(16);
    await page.locator('#user_password').fill(password);
    await page.locator('#user_password_confirmation').fill(password);
    await page.locator('#user_firstname').fill(randomString(8));
    await page.locator('#user_lastname').fill(randomString(8));
    await page.locator('#user_mail').fill(JSON.parse(emails.generateEmail()));
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
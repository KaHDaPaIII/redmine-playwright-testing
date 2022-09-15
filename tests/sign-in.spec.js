const { test, expect} = require('@playwright/test');
import {randomString} from '../my-functions/my-function.js'
import {login, password} from '../my-functions/credentials.js'

test('Sign in with valid credentials.', async ({ page }) => {
    await page.goto('https://www.redmine.org/');
    await page.locator('[href="/login"]').click();
    await page.locator('#username').fill(login());
    await page.locator('#password').fill(password());
    await page.locator('[type="submit"]').click();
    await expect(page.locator('#loggedas')).toBeVisible();
})

test('Sign in with not valid (random generated) credentials.', async ({ page }) => {
    await page.goto('https://www.redmine.org/');
    await page.locator('[href="/login"]').click();
    await page.locator('#username').fill(randomString(16));
    await page.locator('#password').fill(randomString(16));
    await page.locator('[type="submit"]').click();
    await expect(page.locator('#flash_error')).toBeVisible();
})

test('“Stay logged in” is working', async ({ page }) => {
    await page.goto('https://www.redmine.org/');
    await page.locator('[href="/login"]').click();
    await page.locator('#username').fill(login());
    await page.locator('#password').fill(password());
    await page.locator('#autologin').check();
    await page.locator('[type="submit"]').click();
    const newPage = await page.context().newPage();
    await page.close();
    await newPage.goto('https://www.redmine.org/');
    await expect(newPage.locator('#loggedas')).toBeVisible();
})

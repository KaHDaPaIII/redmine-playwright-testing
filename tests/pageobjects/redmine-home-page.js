const { expect } = require('@playwright/test');

exports.RedmineHomePage = class RedmineHomePage {

    constructor(page) {
        this.page = page;
        this.signInLink = page.locator('[href="/login"]');
        this.registerLink = page.locator('[href="/account/register"]');
    }

    async goto() {
        await this.page.goto('https://www.redmine.org/');
    }

    async clickSignIn(){
        await this.signInLink.click();
    }

    async clickRegister(){
        await this.registerLink.click();
    }
}
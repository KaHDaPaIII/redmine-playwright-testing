const { expect } = require('@playwright/test');

exports.RedmineLoginPage = class RedmineLoginPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.autologinCheckbox = page.locator('#autologin');
        this.loginButton = page.locator('[type="submit"]');
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async login(username, password, autologin = false){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        if(autologin){
            await this.autologinCheckbox.check();
        }
        await this.clickLoginButton();
    }
}
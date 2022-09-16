const { expect } = require('@playwright/test');

exports.RedmineRegisterPage = class RedmineRegisterPage {

    constructor(page) {
        this.page = page;
        this.loginInput = page.locator('#user_login');
        this.passwordInput = page.locator('#user_password');
        this.passwordConfirmationInput = page.locator('#user_password_confirmation');
        this.firstnameInput = page.locator('#user_firstname');
        this.lastnameInput = page.locator('#user_lastname');
        this.emailInput = page.locator('#user_mail');
        this.submitButton = page.locator('[type="submit"]');
    }

    async clickSubmitButton(){
        await this.submitButton.click();
    }

    async register(username, password, password_confirmation = password, firstname, lastname, email){
        await this.loginInput.fill(username);
        await this.passwordInput.fill(password);
        await this.passwordConfirmationInput.fill(password_confirmation);
        await this.firstnameInput.fill(firstname);
        await this.lastnameInput.fill(lastname);
        await this.emailInput.fill(email);
        await this.clickSubmitButton();
    }
}
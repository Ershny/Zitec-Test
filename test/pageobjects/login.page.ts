import TestData from '../testdata/testdata';

class LoginPage {
    public get registerEmail () {
        return $('#email_create');
    }

    public get registerBtn () {
        return $('#SubmitCreate');
    }

    public get loginEmail () {
        return $('#email');
    }

    public get loginPassword () {
        return $('#passwd');
    }

    public get loginSubmit () {
        return $('#SubmitLogin');
    }

    public async login () {
        await this.loginEmail.waitForDisplayed({timeout: 20* 1000, timeoutMsg: "Email field was not displayed"});
        await this.loginPassword.waitForDisplayed({timeout: 20* 1000, timeoutMsg: "Password field was not displayed"});
        await this.loginSubmit.waitForDisplayed({timeout: 20* 1000, timeoutMsg: "Login btn was not displayed"});
        await this.loginEmail.setValue(TestData.data.email.base + TestData.data.email.last_index + TestData.data.email.site);
        await browser.pause(1000);
        await this.loginPassword.setValue(TestData.data.password);
        await browser.pause(1000);
        await this.loginSubmit.click();
    }
}

export default new LoginPage();

import Page from '../pageobjects/page';
import Header from '../pageobjects/header';
import Login from '../pageobjects/login.page';
import RegistrationPage from '../pageobjects/register.page';
import TestData from '../testdata/testdata';

describe('Register a new account', () => {
    it('Homepage should be displayed', async () => {
        await Page.open();
    });
    it('User should be able to access login page', async () => {
        await Page.waitUntilPageLoaded();
        await Header.signInButton.click();
    });
    it('User should be able to introduce a valid email address to and proceed to register page', async () => {
        await Page.waitUntilPageLoaded();
        await Login.registerEmail.setValue(TestData.data.email.base + TestData.data.email.next_index + TestData.data.email.site);
        await Login.registerBtn.click();
    });
    it('User should be able to complete registration of a new account, using valid data', async () => {
        await Page.waitUntilPageLoaded();
        await RegistrationPage.registerProcess();
        await browser.debug();
    })
});



import Page from '../pageobjects/page';
import Header from '../pageobjects/header';
import CategoryPage from '../pageobjects/category.page';
import CheckoutPage from '../pageobjects/checkout.page';
import LoginPage from '../pageobjects/login.page';

describe('Checkout as a logged in user using check', () => {
    it('Access Homepage', async () => {
        await Page.open();
    });
    it('User should be able to access Login Page', async () => {
        await Page.waitUntilPageLoaded();
        await Header.signInButton.click();
    });
    it('User should be able to login using valid account', async () =>  {
        await Page.waitUntilPageLoaded();
        await LoginPage.login();
    }); 
    it('User should be able to navigate to a category page', async () => {
        await Page.waitUntilPageLoaded();
        await Header.accessRandomCategory();
    });
    it('User should be able to add product in cart', async () => {
        await Page.waitUntilPageLoaded();
        await CategoryPage.clickRandomAddToCart();
    });
    it('User should be able to proceed to checkout from category page', async () => {
        await Page.waitUntilPageLoaded();
        await CategoryPage.proceedToCheckout();
    });
    it('User should be able to go to step 2 in checkout process', async () => {
        await Page.waitUntilPageLoaded();
        await CheckoutPage.proceedToStepTwo();
    });
    it('User should be able to confirm billing and shipping address', async () => {
        await Page.waitUntilPageLoaded();
        await CheckoutPage.proceedToStepFour();
    });
    it('User should be able to confirm shipping method', async () => {
        await Page.waitUntilPageLoaded();
        await CheckoutPage.proceedToStepFive();
    });
    it('User should be able to choose payment method - check', async () => {
        await Page.waitUntilPageLoaded();
        await CheckoutPage.choosePaymentMethod('check');
    });
    it('User should be able to confirm the order', async () => {
        await Page.waitUntilPageLoaded();
        await CheckoutPage.confirmOrder();
    });
    it('Order should be successfully placed', async () => {
        await CheckoutPage.orderSuccessfullyPlaced();
    });
    it('User should be able to logout from the account', async () => {
        await Header.logOut();
    });
});
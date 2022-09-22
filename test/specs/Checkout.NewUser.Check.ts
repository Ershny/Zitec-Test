import Page from '../pageobjects/page';
import Header from '../pageobjects/header';
import CategoryPage from '../pageobjects/category.page';
import CheckoutPage from '../pageobjects/checkout.page';
import RegistrationPage from '../pageobjects/register.page';
import OrderHistoryPage from '../pageobjects/orderHistory.page';

describe('Checkout checking the errors that can be triggered during flow', () => {
    it('Access Homepage', async () => {
        await Page.open();
    });
    it('Guest user should be able to navigate to a category page', async () => {
        await Page.waitUntilPageLoaded();
        await Header.accessRandomCategory();
    });
    it('Guest user should be able to add product in cart', async () => {
        await Page.waitUntilPageLoaded();
        await CategoryPage.clickRandomAddToCart();
    });
    it('Guest user should be able to proceed to checkout from category page', async () => {
        await Page.waitUntilPageLoaded();
        await CategoryPage.proceedToCheckout();
    });
    it('Guest user should be able to go to step 2 in checkout process', async () => {
        await Page.waitUntilPageLoaded();
        await CheckoutPage.proceedToStepTwo();
    });
    it('User should be able to complete registration of a new account, using valid data', async () => {
        await Page.waitUntilPageLoaded();
        await CheckoutPage.startRegistrationProcess();
        await RegistrationPage.registerProcess();
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
    it('Order should be displayed in Order history', async () => {
        await Page.waitUntilPageLoaded();
        await OrderHistoryPage.orderHistoryContaingItems();
    });
    it('User should be able to logout from the account', async () => {
        await Header.logOut();
    });
});
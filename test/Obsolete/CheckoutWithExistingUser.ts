import Page from '../pageobjects/page';
import Header from '../pageobjects/header';
import CategoryPage from '../pageobjects/category.page';
import CheckoutPage from '../pageobjects/checkout.page';

describe('Checkout with a new user - bank tranfer', () => {
    it('Homepage should be displayed', async () => {
        await Page.open();
    });
    it('Guest user should be able to navigate to a category page', async () => {
        await Page.waitUntilPageLoaded();
        await Header.accessRandomCategory();
    });
    it('Guest user should be able to add product in cart', async () => {
        await CategoryPage.clickRandomAddToCart();
    });
    it('Guest user should be able to proceed to checkout from category page', async () => {
        await CategoryPage.proceedToCheckout();
    });
    it('Guest user should be able to go to step 2 in checkout process', async () => {
        await CheckoutPage.proceedToStepTwo();
    });
});
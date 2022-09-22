import TestData from '../testdata/testdata';

class CheckoutPage {
    // public get proceedToCheckoutBtn () {
    //     return $('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium');    
    // }

    public get proceedToCheckoutBtn () {
        return $('.cart_navigation').$('[title="Proceed to checkout"]');    
    }

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
        return $('#submitLogin');
    }

    public get processAddressBtn () {
        return $('[name="processAddress"]');
    }

    public get acceptShippingAgreeementsCheckbox () {
        return $('#uniform-cgv');
    }

    public get processCarrierBtn () {
        return $('[name="processCarrier"]');
    }

    public get payByBankWire () {
        return $('[title="Pay by bank wire"]');
    }

    public get payByCheck () {
        return $('[title="Pay by check."]');
    }

    public get confirmOrderBtn () {
        return $('#cart_navigation').$('[type="submit"]');
    }

    public get orderConfirmationHeader () {
        return $('.page-heading');
    }

    public get orderConfirmationDetails () {
        return $('.box');
    }

    public get backToOrdersBtn () {
        return $('[title="Back to orders"]');
    }

    public get addNewAddressBtn () {
        return $('.address_add').$('a');
    }

    public get agreementsError () {
        return $('.fancybox-error');
    }

    public get closeAgreementsErrorBtn () {
        return $('[title="Close"]');
    }

    

    public async proceedToStepTwo () {
        await this.proceedToCheckoutBtn.waitForDisplayed({timeout: 20 * 1000, timeoutMsg: "Proceed to checkout was not displayed"});
        await this.proceedToCheckoutBtn.scrollIntoView();
        await this.proceedToCheckoutBtn.click();
    }

    public async loginInCart () {
        await this.loginEmail.waitForDisplayed({timeout: 20* 1000, timeoutMsg: "Email field was not displayed"});
        await this.loginPassword.waitForDisplayed({timeout: 20* 1000, timeoutMsg: "Password field was not displayed"});
        await this.loginSubmit.waitForDisplayed({timeout: 20* 1000, timeoutMsg: "Login btn was not displayed"});
        await this.loginEmail.setValue(TestData.data.email.base + TestData.data.email.last_index + TestData.data.email.site);
        await browser.pause(1000);
        await this.loginPassword.setValue(TestData.data.password);
        await browser.pause(1000);
        await this.loginSubmit.click();
    }

    public async startRegistrationProcess () {
        await this.registerEmail.setValue(TestData.data.email.base + TestData.data.email.next_index + TestData.data.email.site);
        await browser.pause(1000);
        await this.registerBtn.click();
    }

    public async proceedToStepFour (){
        await this.processAddressBtn.waitForDisplayed({timeout: 20 * 1000, timeoutMsg: "Proceed to checkout was not displayed"});
        await this.processAddressBtn.scrollIntoView();
        await this.processAddressBtn.click();
    }

    public async proceedToStepFive (){
        await this.acceptShippingAgreeementsCheckbox.waitForDisplayed({timeout: 20 * 1000, timeoutMsg: "Shipping terms and conditions checkbox was not displayed"});
        await this.acceptShippingAgreeementsCheckbox.scrollIntoView();
        await this.acceptShippingAgreeementsCheckbox.click();
        await this.processCarrierBtn.waitForDisplayed({timeout: 20 * 1000, timeoutMsg: "Proceed to checkout was not displayed"});
        await this.processCarrierBtn.scrollIntoView();
        await this.processCarrierBtn.click();
    }

    public async choosePaymentMethod (paymentMethod: string){
        if(paymentMethod === 'bankwire'){
            await this.payByBankWire.waitForDisplayed({timeout: 20 * 1000, timeoutMsg: "bankwire payment method was not displayed"});
            await this.payByBankWire.scrollIntoView();
            await this.payByBankWire.click();
        }
        if(paymentMethod === 'check'){
            await this.payByCheck.waitForDisplayed({timeout: 20 * 1000, timeoutMsg: "check was not displayed"});
            await this.payByCheck.scrollIntoView();
            await this.payByCheck.click();
        }
        
    }

    public async confirmOrder (){
        await this.confirmOrderBtn.waitForDisplayed({timeout: 20 * 1000, timeoutMsg: "Confirm order button was not displayed"});
        await this.confirmOrderBtn.scrollIntoView();
        await this.confirmOrderBtn.click();
    }

    public async orderSuccessfullyPlaced (){
        await expect(this.orderConfirmationHeader).toHaveText('ORDER CONFIRMATION');
        await expect(this.orderConfirmationDetails).toBeDisplayed();
        await expect(this.backToOrdersBtn).toBeDisplayed();
        await this.backToOrdersBtn.click();
    }

    public async addNewAddressInCheckout (){
        await this.addNewAddressBtn.click();
    }

    public async checkAgreementsError () {
        await this.processCarrierBtn.waitForDisplayed({timeout: 20 * 1000, timeoutMsg: "Proceed to checkout was not displayed"});
        await this.processCarrierBtn.scrollIntoView();
        await this.processCarrierBtn.click();
        await browser.pause(2000);
        await expect(this.agreementsError).toBeDisplayed();
        await expect(this.agreementsError).toHaveText('You must agree to the terms of service before continuing.');
    }

    public async closeAgreementsError () {
        await this.closeAgreementsErrorBtn.click();
    }

}

export default new CheckoutPage();
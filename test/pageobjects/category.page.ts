class CategoryPage {
    public get productBlocks () {
        return $$('.ajax_block_product')
    }

    public get addToCartBtns () {
        return $$('[title = "Add to cart"]');
    }

    public get proceedToCheckoutBtn () {
        return $('[title = "Proceed to checkout"]');
    }

    public async clickRandomAddToCart () {
        const randomIndex = Math.floor(Math.random() * await this.productBlocks.length);
        await this.productBlocks[randomIndex].scrollIntoView();
        await this.productBlocks[randomIndex].moveTo();
        await this.addToCartBtns[randomIndex].waitForDisplayed({timeout: 10*1000, timeoutMsg: 'add to cart btn was not displayed'});
        await this.addToCartBtns[randomIndex].click();
    }

    public async proceedToCheckout () {
        await this.proceedToCheckoutBtn.waitForExist({timeout: 30*1000, timeoutMsg: 'proceed to checkout btn was not displayed'});
        await this.proceedToCheckoutBtn.click();
    }

}

export default new CategoryPage();
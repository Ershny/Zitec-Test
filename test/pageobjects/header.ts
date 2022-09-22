import Page from "./page";

class Header {
    
    public get signInButton () {
        return $('[title="Log in to your customer account"]');
    }

    public get logOutButton () {
        return $('[title="Log me out"]');
    }

    public async accessRandomCategory () {
        const menu = await $('#block_top_menu > ul');
        const categories = await menu.$$('li');
        var mainCategories = [...categories];
        var parent;
        for (const category of categories) {
            parent = await category.parentElement();
            if(parent.elementId !== menu.elementId){
                mainCategories.splice(mainCategories.indexOf(category), 1);
            }
        }
        const chosenCategoryIndex = Math.floor(Math.random() * mainCategories.length);
        await mainCategories[chosenCategoryIndex].click();
    }

    public async logOut () {
        await this.logOutButton.click();
        await Page.waitUntilPageLoaded();
        await expect(this.signInButton).toBeDisplayed();
    }

}

export default new Header();
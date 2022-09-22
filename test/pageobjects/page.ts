class Page {
    public async open () {
        await browser.maximizeWindow();
        await browser.url(`http://automationpractice.com/index.php`)
    }

    public async waitUntilPageLoaded () {
        await browser.pause(1000);
        await browser.setTimeout({
            'implicit': 10*1000,
            'pageLoad': 20*1000,
            'script': 30*1000
        });
    }

}

export default new Page();

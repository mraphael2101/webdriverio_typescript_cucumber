describe('App', () => {
    it('should open the app and click a button', () => {
        const button = $('~button');
        button.click();
        browser.pause(5000);
    });
});

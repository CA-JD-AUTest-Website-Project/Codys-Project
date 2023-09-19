/*

Functions Properly
Ensures browser opens and page is navigated to

*/

import RegisterPage from '../pageobjects/register.page.js'


describe.skip('My openPage application', () => {
    it('navigate to RegisterPage, then pause if possible', async () => {
        await RegisterPage.open()
        await browser.pause(5000) 
        console.log = "The page should have been successfully opened" 
        //begin valid test cases here

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
       //     'You logged into a secure area!')
    })
})
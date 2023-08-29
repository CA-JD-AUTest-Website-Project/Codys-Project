/**
 * test with page objects
 */

import RegisterPage from '../pageobjects/register.page.js'


xdescribe('My Address application', () => {
    it('should check validity of TEST CASE # Address entries', async () => {
        await RegisterPage.open()

        //begin valid test cases here

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
       //     'You logged into a secure area!')
    })
})

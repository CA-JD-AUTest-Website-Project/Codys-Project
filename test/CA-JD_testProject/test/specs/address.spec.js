/**
 * test with page objects
 */
import RegisterPage from '../pageobjects/register.page.js'


describe('My Address application', () => {
    it('should check validity of Address entries', async () => {
        await RegisterPage.open()

        //begin valid test cases here

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
       //     'You logged into a secure area!')
    })
})
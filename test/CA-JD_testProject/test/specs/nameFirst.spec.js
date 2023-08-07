/**
 * test with page objects
 */
import RegisterPage from '../pageobjects/register.page.js'


describe.skip('nameFirst application addresses the firstname field, this positive test suite ', () => {
    it('will ensure allowance, validity of inclusion of XXX requirement', async () => {
        await RegisterPage.open()

        //begin valid test cases here

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
       //     'You logged into a secure area!')
    })
})


describe.skip('nameFirst application addresses the firstname field, this negative test suite ', () => {
    it('will determine the correct restriction of XXX as an entry', async () => {
        await RegisterPage.open()

        //begin valid test cases here

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
       //     'You logged into a secure area!')
    })
})


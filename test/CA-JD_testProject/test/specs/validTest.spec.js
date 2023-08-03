/**
 * test with page objects
 */
import RegisterPage from '../pageobjects/register.page.js'


describe.skip('Addressing all field on the page, this positive test suite, validTest application...', () => {
    it('will ensure validity of baseline positive values to provide a foundation for further testing', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()

            // await page.isVisible()
            //if (await page.locator(mySelector).count()>0)

            // await page.loactor("mySelectr").click()          then can enter text?

            //async isSelectorExists(selector: string) {
            //    return await yadayadayada}
            

        //getElementByID("does-not-exist"); 
        //begin valid test cases here

        //console log


        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
       //     'You logged into a secure area!')
    })
})
/**
 * test with page objects
 */
import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'


describe.skip('nameFirst application addresses the firstname field, this positive test suite ', () => {
    it('will ensure allowance, validity of inclusion of XXX requirement', async () => {
        await RegisterPage.open()
        await RegisterPage { testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.password.validDefault, testValues.lastNameV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault, testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefault}
        //begin valid test cases here

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
       //     'You logged into a secure area!')
    })
})

// immediately below is for Canada or other
describe.skip('zipCanada application addresses the postal code for Canada field, this positive test suite ', () => {
    it('will ensure allowance, validity of inclusion of XXX requirement', async () => {
        await RegisterPage.open()
        await RegisterPage { testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.password.validDefault, testValues.lastNameV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault, testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.provinceV.validDefault, testValues.zipCanadaV.validDefault, testValues.phoneV.validDefault}
    })
})

describe.skip('nameFirst application addresses the firstname field, this negative test suite ', () => {
    it('will determine the correct restriction of TAGXXX as an entry', async () => {
        await RegisterPage.open()

        //begin valid test cases here

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
       //     'You logged into a secure area!')
    })
})


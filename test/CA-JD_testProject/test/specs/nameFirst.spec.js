/**
 * test with page objects
 */

import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

xdescribe('nameFirst application addresses the firstname field, this positive test suite ', () => {
    it('will ensure allowance, validity of inclusion of XXX requirement', async () => {
        await RegisterPage.open()
        await RegisterPage { testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, \
            testValues.eMailV.validDefault, testValues.password.validDefault, testValues.lastNameV.validDefault, \
            testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault, \
            testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, \
            testValues.zipV.validDefault, testValues.phoneV.validDefault}
        //begin valid test cases here

        
    })
})



xdescribe('nameFirst application addresses the firstname field, this negative test suite ', () => {
    it('will determine the correct restriction of XXX as an entry', async () => {
        await RegisterPage.open()

        //begin valid test cases here

        
    })
})

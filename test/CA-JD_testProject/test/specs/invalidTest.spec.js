/**
 * test with page objects
 */
/*

Current Error: TypeError: elem[prop] is not a function

DOES NOT YET WORK


Default test for setting up negative tests which should result in a "pass", green checkmark

use boolean, toBeTrue(), to be binary value? such that I can set expect(step2)to exist as false?
checked for error display flaggy things instead

all elements from step 1 seem to be present in step 2 as well, (ie all fields and button, firstname lastname etc)
for some, can expect error flag to exist, but will not work for all. 

*/


import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing all field on the page, this negative test suite, invalidTest application...', () => {
    it('will ensure that errors can be detected for all fields to provide a foundation for further testing, change to test case #', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        //Begin expectation of Error Flags; Apt/Ste/Unit will accept anything or nothing, as will Province, Canada Postal and Other Postal

        await (RegisterPage.errorFirstName).toBeExisting()
        await (RegisterPage.errorLastName).toBeExisting()
        await (RegisterPage.errorEMail).toBeExisting()
        await (RegisterPage.errorPassword).toBeExisting()
        await (RegisterPage.errorConfirm).toBeExisting()
        await (RegisterPage.errorAddress).toBeExisting()
        //there is no flag generated for Apt/Ste/Unit, so do not await?
        await (RegisterPage.errorCountry).toBeExisting()
        await (RegisterPage.errorState).toBeExisting()
        await (RegisterPage.errorCity).toBeExisting()
        await (RegisterPage.errorUSZip).toBeExisting()
        await (RegisterPage.errorPhoneField3).toBeExisting()
        //how to test for error with next button? click before errors generate
    })
})

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

describe('Addressing all field on the page, this negative test suite, invalidTest application...', () => {
    it('will ensure that errors can be detected for all fields to provide a foundation for further testing, change to test case #', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)  
        await RegisterPage.accntCreate(testValues.firstNameI.invalid1, testValues.lastNameI.invalid1, testValues.eMailI.invalid1, testValues.passwordI.invalid1, testValues.confirmI.invalid1, testValues.addressI.invalid1, testValues.aptSteUnitI.invalid2,  testValues.countryI.invalid1, testValues.cityI.invalid1, testValues.stateI.invalid1, testValues.zipI.invalid1, testValues.phoneI.invalid1Pt1, testValues.phoneI.invalid1Pt2, testValues.phoneI.invalid1Pt3)         
        await RegisterPage.nextButton.click()
        
        await browser.pause(1000)

        //Begin expectation of Error Flags; Apt/Ste/Unit will accept anything or nothing, as will Province, Canada Postal and Other Postal

        await expect(RegisterPage.errorFirstName).toBeExisting()
        await expect(RegisterPage.errorLastName).toBeExisting()
        await expect(RegisterPage.errorEMail).toBeExisting()
        await expect(RegisterPage.errorPassword).toBeExisting()
        await expect(RegisterPage.errorConfirm).toBeExisting()
        await expect(RegisterPage.errorAddress).toBeExisting()
        //there is no flag generated for Apt/Ste/Unit, so do not await?
        await expect(RegisterPage.errorCountry).toBeExisting()
        await expect(RegisterPage.errorState).toBeExisting()
        await expect(RegisterPage.errorCity).toBeExisting()
        await expect(RegisterPage.errorUSZip).toBeExisting()
        await expect(RegisterPage.errorPhoneField3).toBeExisting()
        //how to test for error with next button? click before errors generate
    })
})

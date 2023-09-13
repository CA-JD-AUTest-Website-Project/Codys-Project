/**
 * test with page objects
 */

/*

All content generated, needs documentation and clean up

Test suites for Valid and Invalid Non- US/Canada ("Other") Zip codes
zipOtherV#
zipOtherI#
*/

import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe('Addressing the Postal field on the pagewhen neither Canada nor the United States are selected, this positive test suite, zipOther application...', () => {
    it('will ensure validity of hyphens as a valid value, change to test case #', async () => {
        //allow hyphens, valid2
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherV.valid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
    })

    it('will ensure validity of accents as a valid value, change to test case #', async () => {
        //allow accents, valid3
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherV.valid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
    })

    it('will ensure validity of spaces, change to test case #', async () => {
        //allow spaces, valid4
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherV.valid4, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
    })

    it('will ensure validity of minimum valid value, change to test case #', async () => {
        //allow 3 chars, valid5
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherV.valid5, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
    })

    it('will ensure validity of highest valid value, change to test case #', async () => {
        //allow 10 chars, valid6
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherV.valid6, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
    })
})


describe('Addressing the Postal field on the page when neither Canada nor the United States are selected, this negative test suite, zipOther application...', () => {
    it('will ensure invalidity of lowest invalid boundary value, change to test case #', async () => {
        //reject 2 chars, invalid1
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid1, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await (RegisterPage.errorUSZip).toBeExisting()
    })

    it('will ensure invalidity of high invalid boundary value, change to test case #', async () => {
        //reject 11 chars, invalid2
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await (RegisterPage.errorUSZip).toBeExisting()
    })

    it('will ensure invalidity of low invalid equivalent partion value, change to test case #', async () => {
        //reject <3 chars, invalid3
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await (RegisterPage.errorUSZip).toBeExisting()
    })

    it('will ensure invalidity of high invalid equivalent partion value, change to test case #', async () => {
        //reject >10 chars, invalid4
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid4, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await (RegisterPage.errorUSZip).toBeExisting()
    })

    it('will ensure invalidity of symbols, change to test case #', async () => {
        //reject symbols, invalid5
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid5, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await (RegisterPage.errorUSZip).toBeExisting()
    })

})




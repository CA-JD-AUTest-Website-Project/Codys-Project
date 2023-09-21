/**
* test with page objects
*All INVALID will fail because zipOther will accept ANY input 
*
*/

/*

Valid: Does Function  5/5 pass
Invalid: Tests Function Properly 0/5 pass (Impossible to pass due because error flag will not generate for "other" countries)

To Do: create a cityO setValue instead of selectByVisibleText entry for city/state, id=city
    can use cityV.validDefault as data for it
    Currently does NOT work

can't see hyphen valid test
cant see BVA I L in terminal

Have just reverted change removing "state" from input: still fails, but now "element not interactable error"


Previous? Current Errors: ERROR webdriver: Request failed with status 400 due to element not interactable: element not interactable: Element is not currently visible and may not be manipulated
    this was due to expecting a drop-down? 
    "state" is still trying to enter a dropdown(?) and that's what isn't interactable? Not trying interact w/ button, right?


Error: Option with text "^(`O')^" not found. 
    Looking for drop-down entry with those chars 
    b/c testValues.stateV.validDefault removed? 
    BUT b/c "other" there would be no drop-down

    need stateOtherV and stateOtherI in testData w/ addvalue? 


Error is at state? If so, because using selectby visible as if were dropdown as opposed to setvalue as its an empty field
Problem for ALL invalids? YES, all VALID and INVALID
Create new stateV valid4? that is for filled entry like...  Chihuaua state? 
Will currently use stateV validDefault ("CA") but use it in a field instead of a dropdown?
For "other" country's city/state id=city, presumably same xpath as city? 
So, remove state parameter being passed from accntCreate when being called here? No, didnt work, right?

country  drop-down, no change
state   field, needs change
city   merged with state, do not include?
Alternatively, remove state as city has same id and is field   YES

using cityV valid2 "San José" ?      issue with accent?
validDefault instead, San Diego for simplicity of everything being default except country and city/state and zip

testValues.stateV.validDefault,   removed? NO

all currently set to countryV.valid3 "UK" which has no drop-down for City/State


NOT All content generated, needs documentation and clean up
currently .skip(ped)?

Test suites for Valid and Invalid Non- US/Canada ("Other") Zip codes
zipOtherV#
zipOtherI#
*/

import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing the Postal field on the pagewhen neither Canada nor the United States are selected, this positive test suite, zipOther application...', () => {
    it('will ensure validity of hyphens as a valid value, change to test case #', async () => {
        //allow hyphens, valid2
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherV.valid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.cityO.validDefault, testValues.zipOtherV.valid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
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
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.cityO.validDefault, testValues.zipOtherV.valid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
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
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.cityO.validDefault, testValues.zipOtherV.valid4, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
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
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.cityO.validDefault, testValues.zipOtherV.valid5, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
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
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.cityO.validDefault, testValues.zipOtherV.valid6, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
    })
})


describe.skip('Addressing the Postal field on the page when neither Canada nor the United States are selected, this negative test suite, zipOther application...', () => {
    it('will ensure invalidity of lowest invalid boundary value, change to test case #', async () => {
        //reject 2 chars, invalid1
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid1, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.zipOtherI.invalid1, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.errorUSZip).toBeExisting()
    })

    it('will ensure invalidity of high invalid boundary value, change to test case #', async () => {
        //reject 11 chars, invalid2
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.zipOtherI.invalid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.errorUSZip).toBeExisting()
    })

    it('will ensure invalidity of low invalid equivalent partion value, change to test case #', async () => {
        //reject <3 chars, invalid3
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.zipOtherI.invalid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.errorUSZip).toBeExisting()
    })

    it('will ensure invalidity of high invalid equivalent partion value, change to test case #', async () => {
        //reject >10 chars, invalid4
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid4, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.zipOtherI.invalid4, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.errorUSZip).toBeExisting()
    })

    it('will ensure invalidity of symbols, change to test case #', async () => {
        //reject symbols, invalid5
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(1000)
             
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipOtherI.invalid5, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.zipOtherI.invalid5, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        //await browser.pause(1000)
        await expect(RegisterPage.errorUSZip).toBeExisting()
    })

})




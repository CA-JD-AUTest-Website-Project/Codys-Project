/*
*
*country, needs content,etc
*
*
*INCOMPLETE
*
*Doesn't include Defaults
*What's missing?
*not yet tested?
*
* 3 VP min? 
*
*Valid: X/3     ()
*Invalid: X/1   ()
*
*Canada changes stuff
*250 drop-down including selectcountry
*Non-UC/Canada turns city onto city/state
*Invalid:
*249 drop-down
*251
*"select a Country Option" (rejects?)
*
*
*/


import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing Country field on the page, this positive test suite, country application...', () => {
    it('will ensure changes to "Zip" and "State" fields as a result of selecting Canada, change to test case #', async () => {
        //valid2 "CANADA"
        //changes State to Province and Zip to Postal? 
        //zip id doesn't change, check for text? 
        //province id changes to stateCa though, can test for that. 
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid2, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })
    it('will ensure presence of city/state field when Canada nor US are selected, change to test case #', async () => {
        //valid3 "UK"
        //Non-US -Canada combines city/state?
        //if state == null or undefined or '[empty]'  because only city is there as city/state
        //
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })
    it('will ensure validity of fully populated drop-down, change to test case #', async () => {
        //change input data
        //250 drop-down including select a country? 
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })


})


describe.skip('Addressing Country field on the page, this negative test suite, country application...', () => {
    it('will ensure invalidity of "Select a country" as an option, change to test case #', async () => {
        //invalid1
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
      
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryI.invalid1, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorCountry).toBeExisting()
     
    })
})



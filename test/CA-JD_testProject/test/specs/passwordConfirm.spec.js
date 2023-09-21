/* 
 * 
 * Test for Password matching
 * 
 * Functions Properly
 * 
 * Valid: 1/1
 * Invalid: 1/1
 * 
 * Just 1 positive and negative test? 
 * 
*/


import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing Confirm Password field on the page, this positive test suite, passwordConfirm application...', () => {
    it('will ensure validity of a matching password as an accepted entry, change to test case #', async () => {
        //validDefault is "*Wisew0mbat!*"
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        // now returns Cannot read properties of undefined (reading 'trim')
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        //Do we simply match values here, expecttohavetext(variable?)


        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

     

    })
})

describe.skip('Addressing Confirm Password field on the page, this negative test suite, passwordConfirm application...', () => {
    it('will ensure invalidity of a non matching password, change to test case #', async () => {
        //invalid1 is Womba1, as is passwordV valid2 so be careful
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        //Now: Cannot read properties of undefined (reading 'trim')
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmI.invalid1, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorConfirm).toBeExisting()

     

    })
})


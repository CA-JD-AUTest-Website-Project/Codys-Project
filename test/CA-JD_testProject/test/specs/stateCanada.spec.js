/**
 * test with page objects
 * 
 * replace all countryV valid2 for Canada
 * 
 * Error: Option with text "AB" not found.  ?
 * 
 * Test for Canada state field   (which has a different id in register?)
 * 
 * include //await this.canadaStateField.setValue(province); 
 *            //canadaStateField w/ id #stateCa in register?
 * 
 * data comes from provinceValid etc, needs to be further populated?
 * 
 * 8 input values
 * 
 * Valid: 1/5
 * Invalid: 0/5 (6 w/ NULL)  
 * 
 * 
 * Valid:
 * presence of drop-down?
 * 13 provinces exist in dropdown
 * Default is "provinces" (shouldn't be a valid entry on its own)
 * can accept 1-2 char entries
 * can accept 1 char
 * Invalid:
 * No digits (23 correlates to BC, British Columbia)
 * No Symbols 
 * > 2 chars (ONT results in Prince Edward Island, not Ontario)
 * Disallow "Province" (but will accept it though)
 * Correct # of states (input >13 and <13) separate tests
 * 
 * 
 */
import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing Province field on the page, this positive test suite, stateCanada application...', () => {
    it('will ensure presence of drop-down menu, change to test case #', async () => {
        //passes
        await RegisterPage.open()
        await expect(RegisterPage.stateField).toBeExisting()
        //alternatively canadaStateField if written more explicitly? 
    })

    /*
    it('will ensure existance of 13 provinces listed in drop-down, (this test should fail?) change to test case #, tag ', async () => {        
        
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateI.invalid1, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await (RegisterPage.errorState).toBeExisting()

    })
*/
    it('will ensure existance of 13 provinces listed in drop-down, (this test should fail?) change to test case #, tag ', async () => {        
        
        //elem[prop] is not a function; but didnt run real test...

        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    
        //check for children here? or iterate through each entry, adding?
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateI.invalid1, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        //check for 14th?, then check for 12th? 
        //await (RegisterPage.errorState).toBeExisting()

    })
    it('will ensure default entry is set to "Provinces", change to test case #, tag ', async () => {        
        //Expect $(`#state`) to have text containing
        //returns list of 64 states and territories... stateCa not called?

        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await expect(RegisterPage.stateField).toHaveTextContaining('Provinces')    

        await (RegisterPage.errorState).toBeExisting()

    })

    it('will ensure acceptance of 2 chars, (this test should fail?) change to test case #, tag ', async () => {        
         //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.

        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
    
        await (RegisterPage.errorState).toBeExisting()

    })

    it('will ensure acceptance of 1 char, (this test should fail?) change to test case #, tag ', async () => {        
        //Option with text "A" not found.

        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.provinceV.valid2, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
    
        await (RegisterPage.errorState).toBeExisting()

    })



})

describe.skip('Addressing Province field on the page, this negative test suite, stateCanada application...', () => {
    /*    
    it('will ensure invalidity of a NULL value, that it is a required field, change to test case #, tag X42', async () => {        
                //rbFieldIsRequired? 

        await (RegisterPage.errorState).toBeExisting()

    })
    */


   
    it('will ensure invalidity of numerical value, (this test should fail?) change to test case #, tag ', async () => {        
        //No digits (23 correlates to BC, British Columbiae?)
        //Option with text "23" not found.
        //Option with text "45" not found.
        //see note below
        //still a pass though?
        //using countryV.validDefault (US) and provinceI.invalid1 (23); but inputs 45 (stateI.invalid1)
        //no it doesn't, checked for 23
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.provinceI.invalid1, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await (RegisterPage.errorState).toBeExisting()

    })


it('will ensure invalidity of symbols, (this test should fail?) change to test case #, tag X42', async () => {        
    //No symbols
    // Option with text "*^" not found.  so passes?
    await RegisterPage.open()
    await expect(RegisterPage.firstNameField).toBeExisting()
    await browser.pause(1000)    

    await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.provinceI.invalid2, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
   
    await (RegisterPage.errorState).toBeExisting()

})

it('will ensure invalidity "Provinces" as a permitted entry, (this test should fail) change to test case #, tag ', async () => {        
    //No Provinces, but will fail
    // Error: Option with text "Provinces" not found.
    //Would accept "Provinces" as a *Selection* as it will accept ANYTHING from drop-down menu
    
    await RegisterPage.open()
    await expect(RegisterPage.firstNameField).toBeExisting()
    await browser.pause(1000)    

    await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.provinceI.invalid3, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
   
    await (RegisterPage.errorState).toBeExisting()

})

it('will ensure number of provinces does not exceed, nor falls below, (this test should fail?) change to test case #, tag ', async () => {        
    //only X provinces listed
    //Error: Option with text "45" not found.
    
    await RegisterPage.open()
    await expect(RegisterPage.firstNameField).toBeExisting()
    await browser.pause(1000)    

    //children? or iterate through each menu item? </option> ?

    await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateI.invalid1, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
   
    await (RegisterPage.errorState).toBeExisting()

})

it('will ensure invalidity of more than 2 char inputs, (this test should fail?) change to test case #, tag ', async () => {        
    //> 2 chars     (ONT results in Prince Edward Island, not Ontario)
    //Option with text "ONT" not found, so Pass? but again, only matching exact string
    
    await RegisterPage.open()
    await expect(RegisterPage.firstNameField).toBeExisting()
    await browser.pause(1000)    

    await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.provinceI.invalid4, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
   
    await (RegisterPage.errorState).toBeExisting()

})

})


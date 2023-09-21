/**
 * test with page objects
 * 
 * Test for US state field
 * 
 * 3 test conditions, 2 test inputs, 1 test case minimum? (per deliverables)
 * 
 * Valid: 2/5
 * Invalid: 0/4  (6 with invalid NULL test and counting children) Failing for wrong reason
 * 
 * //Cannot read properties of undefined (reading 'trim')  for negative default state/province input
 * 
 * Chrome Driver Cloud Management?
 * 
 * Valid:
 * presence of drop-down
 * valid state for selected nation
 * Default CA instead of "State"
 * can accept 2 char entries
 * "" 1 char entries
 * Invalid:
 * cannot be blank/required field
 * No digits (45 correlates to DE, Delaware?)
 * No Symbols (results in AA, the bottom one
 * > 2 chars (ARI results in Idaho, not Arkansas)
 * Disallow State/Province (will accept "Province" though)
 * Correct # of states (input >63 and <63)
 * 
 * 
 */
import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing State field on the page, this positive test suite, stateUS application...', () => {
    it('will ensure presence of drop-down menu, change to test case #', async () => {
        //passes
        await RegisterPage.open()
        await expect(RegisterPage.stateField).toBeExisting()
               
    })

    it('will ensure validity of state for selected nation, change to test case #', async () => {
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        //supposed to use countryV.valid2? (canada) but dont have data for canadian state
        //NOW: Cannot read properties of undefined (reading 'trim')
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
       

    }) 
        
    it('will ensure default value to be CA, test case #, Tag V47', async () => {
        //passes
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await expect(RegisterPage.stateField).toHaveTextContaining('CA')//stateV.validDefault is what we match to? 
               
        await browser.pause(1000)

    })

    it('will ensure validity of two character entries, change to test case #', async () => {
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.valid2, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await expect(RegisterPage.stateField).toHaveTextContaining('VA')

        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
       

    })


    it('will ensure validity of one character entries, change to test case #', async () => {
        //currently fails, "Option with text "L" not found."
        //because searching dropdown for that specific option, not presence of char. 
        //expect to fail? else need different method/approach
        
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.valid3, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await expect(RegisterPage.stateField).toHaveTextContaining('LA')

        await RegisterPage.nextButton.click()
        await browser.pause(1000)
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
       
    })



}) 


describe.skip('Addressing State field on the page, this negative test suite, stateUS application...', () => {
    /*    
    it('will ensure invalidity of a NULL value, that it is a required field, change to test case #, tag X42', async () => {        
                //rbFieldIsRequired? 

        await (RegisterPage.errorState).toBeExisting()

    })
    */
    it('will ensure invalidity of numerical value, (this test should fail?) change to test case #, tag X42', async () => {        
        //No digits (45 correlates to DE, Delaware?)
        //Option with text "45" not found.
        //see note below
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)    

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateI.invalid1, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await (RegisterPage.errorState).toBeExisting()

    })

    it('will ensure invalidity of symbols, (this test should fail?) change to test case #, tag X42', async () => {        
        //No Symbols (results in AA, the bottom one)
        //Option with text "&%" not found.   so it passes? 
        //Could allow a symbol if it matched exactly, "C#" for instance
        //See note below
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateI.invalid2, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)

        await (RegisterPage.errorState).toBeExisting()

    })

    it('will not allow an input greater than 2 chars, (this test should fail?) change to test case #, tag X42', async () => {        
        //> 2 chars (ARI results in Idaho, not Arkansas) (AR -> ID)
        //Option with text "ARI" not found.    because it does not see it, it passes, right? or wrong reason? 
        //tries to select that option as opposed to entering the text... change to setvalue as opposed to byvisibletext?
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateI.invalid3, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await expect(RegisterPage.stateField).toHaveTextContaining('AR')

        await (RegisterPage.errorState).toBeExisting()

    })

    it('will not allow the default value of State/Province, change to test case #, tag X42', async () => {        
        //Cannot read properties of undefined (reading 'trim')
        //Disallow State/Province (will accept "Province" though)
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateI.invalid4, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)

        await (RegisterPage.errorState).toBeExisting()

    })

/*
    it('will ensure the correct quantity of States/Territories listed,  change to test case #, tag X42', async () => {        
        //Correct number of state > or < 63, doesn't add Candadian provinces, right?
        //check children? what was the plan here?
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)


        
        await (RegisterPage.errorState).toBeExisting()

    })
 */   


})
        
        
        //console.log('countryField selector: ' + countryField);
       
  


         //await RegisterPage.countryField child(2)     // for selecting in drop down?
     
       
        //await RegisterPage.accntCreate(testValues.lastNameV.valid4)             //valid4 has no accents or special chars
       
       
       
        //await RegisterPage.nextButton.click()
        //await RegisterPage.click(nextButton)



            //await RegisterPage. { firstNameField.setValue(testValues.firstNameV)      //passes entire array  WRONG, no curly brace anyway
        //await browser.pause(2500)
           

            //for  array iyerating through addresses, skipping over nth, and then after finishing loop enters the invalid value
       
           
       

        //await browser.pause(5000)
   


     


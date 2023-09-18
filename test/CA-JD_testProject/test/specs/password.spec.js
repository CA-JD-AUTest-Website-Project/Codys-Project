/* 
 * 
 * Test for Password Creation
 * 
 * Valid: 0/2   (did we need more?)
 * Invalid: 0/7  (8 with IP of 66+ char)
 * 
 * Do we just accept that effectively all will also generate a flag on confirm password? 
 * Do we simply pass the same value twice?
 * 
 * Just realized I didn't have the expect errors for invalids, but likely wouldn't have made them pass anyway
 * 
*/


import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing Password field on the page, this positive test suite, password application...', () => {
    it('will ensure valid boundary of 6 chars, change to test case #', async () => {
        //valid2 is "Womba1"
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.valid2, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        //Do we simply match values here, expecttohavetext(variable?)


        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })

    it('will ensure valid boundary of 64 chars, change to test case #', async () => {
        //valid3 is 64 chars
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.valid3, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        //Do we simply match values here, expecttohavetext(variable?)


        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })


})

describe('Addressing Password field on the page, this negative test suite, password application...', () => {
    it('will ensure invalidity of 5 char password, change to test case #', async () => {
        //invalid1 is Womb1, 5 chars (BVA I)
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid1, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorPassword).toBeExisting()

     

    })
    it('will ensure invalidity of first name as password, change to test case #', async () => {
        //invalid2 is Günther#1, contains first name
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid2, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorPassword).toBeExisting()

    })

    it('will ensure invalidity of last name as password, change to test case #', async () => {
        //invalid3 is Have'feld#2, contains last name
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid3, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorPassword).toBeExisting()

    })

    it('will ensure invalidity of email as password, change to test case #', async () => {
        //invalid4 is <Jacksol1ttlé!>@gmail.com, same as email.. 
        //"make sure to change email to include number to isolate the two invalid tests"?
        //passwordV validDefault has "i" instead of "1"
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid4, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorPassword).toBeExisting()

    })
    
    it('will ensure invalidity of a password without a capital letter, change to test case #', async () => {
        //invalid5 is *wisew0mbat!*,  lacks capital letter
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid5, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorPassword).toBeExisting()

    })

    it('will ensure invalidity of a password without a digit, change to test case #', async () => {
        //invalid6 ,  lacks number
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid6, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorPassword).toBeExisting()

    })

    it('will ensure invalidity of a 65 character password, change to test case #', async () => {
        //invalid7 65 chars
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid5, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorPassword).toBeExisting()

    })

    //need invalid8? just 65 char BVA I? or is above BVA and this needs to be IP at 66 char? 


})


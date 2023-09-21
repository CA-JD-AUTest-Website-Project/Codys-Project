/* 
 * 
 * Test for Password Creation
 * 
 * ALMOST functions properly
 * 
 * Valid: 0/2   (did we need more?) (expect 1 to fail based on wrong spec)
 * Invalid: 4/7  (8 with IP of 66+ char) (expect other 3 to fail)
 * 
 * Fixed:Do we just accept that effectively all will also generate a flag on confirm password? 
 * Fixed: Do we simply pass the same value twice?
 * ^^^ set confirmPassword to same passwordV or 'I value
 * 
 * ERROR (same for all): Cannot read properties of undefined (reading 'trim')
 * ERROR?/FIXED? ://The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
 * 
 * FIXED:Just realized I didn't have the expect errors for invalids, but likely wouldn't have made them pass anyway
 * 
 * setValue/addValue 
 * 
*/


import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing Password field on the page, this positive test suite, password application...', () => {
    it('will ensure valid boundary of 6 chars, change to test case #', async () => {
        //valid2 is "Womba1"
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        //Does not reach Step 2
        //Website requires 8, so incorrect spec given? 
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.valid2, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.valid2, testValues.passwordV.valid2, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        //Do we simply match values here, expecttohavetext(variable?)


        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })

    it('will ensure valid boundary of 64 chars, change to test case #', async () => {
        //Does not reach step 2, false negative or coded wrong? Wrong data? 
        //valid3 is 64 chars
        // has 64, upper and lower case and #  ...?
        //webpage says needs special character?
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.valid3, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.valid3, testValues.passwordV.valid3, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        //Do we simply match values here, expecttohavetext(variable?)


        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })


})

describe.skip('Addressing Password field on the page, this negative test suite, password application...', () => {
    it('will ensure invalidity of 5 char password, change to test case #', async () => {
        //invalid1 is Womb1, 5 chars (BVA I)
        //passes
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid1, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid1, testValues.passwordI.invalid1, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorPassword).toBeExisting()

     

    })
    it('will ensure invalidity of first name as password, change to test case #', async () => {
        //No error flag created, so, false positive? Therefore expect to fail. 
        //invalid2 is Günther#1, contains first name
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid2, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid2, testValues.passwordI.invalid2, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorPassword).toBeExisting()

    })

    it('will ensure invalidity of last name as password, change to test case #', async () => {
        //No error flag created, so, false positive? Therefore expect to fail. 
        //invalid3 is Have'feld#2, contains last name
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid3, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid3, testValues.passwordI.invalid3, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)

        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorPassword).toBeExisting()

    })

    it('will ensure invalidity of email as password, change to test case #', async () => {
        //No error flag created, so, false positive? Therefore expect test to fail. data is accepted
        //invalid4 is <Jacksol1ttlé!>@gmail.com, same as email.. 
        //"make sure to change email to include number to isolate the two invalid tests"?
        //passwordV validDefault has "i" instead of "1"
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid4, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid4, testValues.passwordI.invalid4, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)

        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorPassword).toBeExisting()

    })
    
    it('will ensure invalidity of a password without a capital letter, change to test case #', async () => {
        //invalid5 is *wisew0mbat!*,  lacks capital letter
        //passes
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid5, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid5, testValues.passwordI.invalid5, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)

        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorPassword).toBeExisting()

    })

    it('will ensure invalidity of a password without a digit, change to test case #', async () => {
        //invalid6 ,  lacks number
        //passes
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        //Cannot read properties of undefined (reading 'trim')
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid6, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid6, testValues.passwordI.invalid6, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)

        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorPassword).toBeExisting()

    })

    it('will ensure invalidity of a 65 character password, change to test case #', async () => {
        //invalid7 65 chars
        //passes
        //The setValue/addValue command only take string or number values. If you like to use special characters, use the "keys" command.
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
    
        //await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid5, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordI.invalid7, testValues.passwordI.invalid7, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)

        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorPassword).toBeExisting()

    })

    //need invalid8? just 65 char BVA I? or is above BVA and this needs to be IP at 66 char? 


})


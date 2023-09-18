/**
 * 
 * nameLast, need to generate content, describe it statements
 * have not tested
 * 
 * Valid: X/4 ()
 * Invalid: X/4 (6 for IPs)
 * 
 * Errors?
 * 
 * 
 */



import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing Last Name field on the page, this positive test suite, nameLast application...', () => {
    it('will ensure validity of baseline positive values to provide a foundation for further testing, change to test case #', async () => {
        //valid2
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.valid2, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

     
    })

    it('will ensure validity of baseline positive values to provide a foundation for further testing, change to test case #', async () => {
        //valid3
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.valid3, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

     
    })
    it('will ensure validity of baseline positive values to provide a foundation for further testing, change to test case #', async () => {
        //valid4
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.valid4, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

     
    })
    it('will ensure validity of baseline positive values to provide a foundation for further testing, change to test case #', async () => {
        //valid5
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.valid5, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

     
    })

})


describe.skip('Addressing all field on the page, this negative test suite, nameLast application...', () => {
    it('will ensure invalidity of baseline positive values to provide a foundation for further testing, change to test case #', async () => {
        //invalid1
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameI.invalid1, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorLastName).toBeExisting()

    })
    it('will ensure invalidity of baseline positive values to provide a foundation for further testing, change to test case #', async () => {
        //invalid2
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameI.invalid2, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorLastName).toBeExisting()

    })
    it('will ensure invalidity of baseline positive values to provide a foundation for further testing, change to test case #', async () => {
        //invalid3
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameI.invalid3, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorLastName).toBeExisting()

    })
    it('will ensure invalidity of baseline positive values to provide a foundation for further testing, change to test case #', async () => {
        //invalid4
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameI.invalid4, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await (RegisterPage.errorLastName).toBeExisting()

    })

    //invalid 5 and 6 for 1 char and 66 chars? (IPs as opposed to the BVA-Is)


})
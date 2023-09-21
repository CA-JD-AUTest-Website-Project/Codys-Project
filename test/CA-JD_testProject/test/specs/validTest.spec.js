/**
 * test with page objects
 * 
 * Test for valid values
 * Functions Properly
 * 
 */
import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing all field on the page, this positive test suite, validTest application...', () => {
    it('will ensure validity of baseline positive values to provide a foundation for further testing, change to test case #', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        //await (RegisterPage.firstNameField).setValue(testValues.firstNameV.validDefault)
       

        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        //await RegisterPage.accntCreate()
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        //await expect(RegisterPage.regSolo).toBeExisting()
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

        //console.log = "End of validTest"

        //console.log('countryField selector: ' + countryField);
       
       
        //await RegisterPage.accntCreate(testValues.countryV.validDefault, testValues.stateV.validDefault)
        //await RegisterPage.accntCreate(testValues.countryV.validCA, testValues.provinceV.validDefault) //which countryV: validN is canada?
        // issues with state and country on register page, which then presents as line15 char9 on validTest page
        //coincidental as dropdowns?
        //Need to test countryV
        //Skipping over Country and State drop-downs allows city to be entered correctly and pass its validDefault
        //Simply push them to the end of the line, before "click" ?

        //await RegisterPage.accntCreate(testValues.cityV.validDefault)

         //await RegisterPage.countryField child(2)     // for selecting in drop down?


        //can do zip and phoneV
       
       
        //await RegisterPage.accntCreate(testValues.lastNameV.valid4)             //valid4 has no accents or special chars
       
       
       
        //await RegisterPage.nextButton.click()
        //await RegisterPage.click(nextButton)



            //await RegisterPage. { firstNameField.setValue(testValues.firstNameV)      //passes entire array  WRONG, no curly brace anyway
        //await browser.pause(2500)
           

            //for  array iyerating through addresses, skipping over nth, and then after finishing loop enters the invalid value
       
           
       

        //await browser.pause(5000)
   
/*
        await RegisterPage. { firstNameField.setValues(testValues.firstNameV.validDefault)/*, lastNameField.setValues(testValues.lastNameV.validDefault),
            eMailField.setValues(testValues.eMailV.validDefault), passwordField.setValues(testValues.password.validDefault), confirmPasswordField.setValues(testValues.lastNameV.validDefault),
            addressField.setValues(testValues.addressV.validDefault), aptSteUnitField.setValues(testValues.aptSteUnitV.validDefault),
            countryField.setValues(testValues.countryV.validDefault), cityField.setValues(testValues.cityV.validDefault), stateField.setValues(testValues.stateV.validDefault), provinceField.setValues(testValues.provinceV.validDefault),
            canadaPostalField.setValues(testValues.zipCanadaV.validDefault), usZipField.setValues(testValues.zipV.validDefault), phoneField1.setValues(testValues.phoneV.validDefaultPt1), phoneField2.setValues(testValues.phoneV.validDefaultPt2),
            phoneField3.setValues(testValues.phoneV.validDefaultPt3)*/ /*}    
            await browser.pause(5000)
            console.log = "This should have actually entered data into fields"    
            //await RegisterPage.firstNameField.setValues(testValues.firstNameV.validDefault)
*/
            // await page.isVisible()
            //if (await page.locator(mySelector).count()>0)

            // await page.loactor("mySelectr").click()          then can enter text?

            //async isSelectorExists(selector: string) {
            //    return await yadayadayada}
           

        //getElementByID("does-not-exist");
        //begin valid test cases here

        //console log


     
    })
})
//selectby visible text
// immediately below is for Canada or other

/*

describe('zipCanada application addresses the postal code for Canada field, this positive test suite ', () => {
    it('will ensure allowance, validity of inclusion of XXX requirement', async () => {
        await RegisterPage.open()
        await RegisterPage { testValues.firstNameV.validDefault, testValues.lastNameV.validDefault,
        testValues.eMailV.validDefault, testValues.password.validDefault, testValues.lastNameV.validDefault,
        testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,
        testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.provinceV.validDefault,
        testValues.zipCanadaV.validDefault, testValues.phoneV.validDefault}
    })
})
*/

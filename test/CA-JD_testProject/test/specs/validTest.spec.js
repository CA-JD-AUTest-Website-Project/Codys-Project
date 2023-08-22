validTest.spec.js
Jack Diggs
Jack Diggs;Cody Archer
/**
 * test with page objects
 */
import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe('Addressing all field on the page, this positive test suite, validTest application...', () => {
    it('will ensure validity of baseline positive values to provide a foundation for further testing', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        //await browser.pause(5000)
        await (RegisterPage.firstNameField).setValue(testValues.firstNameV.validDefault)
        //await RegisterPage. { firstNameField.setValues(testValues.firstNameV.validDefault),
        //    lastNameField.setValues(testValues.lastNameV.validDefault)}
       
           
       

        await browser.pause(5000)
   
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


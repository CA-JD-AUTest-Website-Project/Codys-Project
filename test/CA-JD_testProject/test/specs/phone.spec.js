/**
 * test with page objects
 */
import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe('Addressing three phone number fields, this positive test suite, phone number application...', () => {
    it('will ensure validity non-default positive phone number values, change to test case #s', async () => {
        //unaltered, needs input changed
        // max digits of 10, add fields to array, then check array length
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(2500)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.nextButton.click()
        await browser.pause(2500)
    })
    it('will ensure validity non-default positive phone number values, test case #s', async () => {
        //unaltered, needs input changed
        // divide by 100, then 10, then 1, (modulus?) assign each value to array position, as opposed to assigning full 3 char value to 1 address in array
        //3-3-4 quantity of digits per field, similar approach?
        // when addressing number of chars in field, set value to 1234, test whether final char is 4, if not, then only allowed 3 chars? 
        //"pop" if starts with 1?

        //phone1[]=input, etc; array.length(phoneX) ?=
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(2500)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.nextButton.click()
        await browser.pause(2500)
    })
})



    describe('Addressing three phone number fields, this negative test suite, phone number application...', () => {
        it('will test rejection of phone number values, change to test case #s', async () => {
            //unaltered, needs input changed
            //uses testData ##   title invalid1-1? for first test, field 1?
            //not greater than 10 digits (w/0 leading 1? etc) (IP), 12 digits; 858588230012
            //should pass even though invalid data b/c won't accept additional digits?
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(2500)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
            
            
            await RegisterPage.nextButton.click()
            await browser.pause(2500)
        })
        it('will test rejection of phone number values, change to test case #s', async () => {
            //unaltered, needs input changed
            //not less than 10 digits (IP), 8 digits
            //should fail due to insufficient digits in field
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(2500)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
            await RegisterPage.nextButton.click()
            await browser.pause(2500)
        })
        it('will test rejection of phone number values, change to test case #s or include tag', async () => {
            //unaltered, needs input changed
            //disallow letters; check that each char in array is 1-0, as opposed to detecting alpha or symbols?
            //include check for spaces and accents?
            //should fail
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(2500)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
            await RegisterPage.nextButton.click()
            await browser.pause(2500)
        })






})

/**
 * test with page objects
 * 
 * Same ERROR: Cannot read properties of undefined (reading 'trim')
 * Removes whitespace around the string?
 * 
 * Need to enter data in testData
 * 
 * 
 * Valid: 0/2  
 * Invalid: 0/10        (should be 2 false negatives)
 * 
 * 1 VP, 2 IP, 2 BVA-I, 2 BVA-V
 * 10 cases min (w/o combined parameters)
 * 
 * 8 neg
 * 
 * 10 digit BVA-V (H and L?)        //1652
 * 3 digit-3 digit-4 digit (format? quantity per field?) (VP?)(count each input length?)    //1638
 * <10 digits (IP) (8 digits) (maybe 7, one lacking from each?)     //1862
 * Disallow Letters (IP)        //2129
 * Disallow Symbols (except hyphens?) (IP)      //2143
 * 11 digits BVA-I      //2171
 * 9 digits BVA-I       //2185
 * No Spaces (IP)       //2213
 * No Accents (IP)      //line 2227
 * >10 digits IP (12)   //1595
 * 
 * 
 * 
 * 
 */
import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing three phone number fields, this positive test suite, phone number application...', () => {
    it('will ensure validity of BVA-H and -L values, change to test case #s', async () => {
        //unaltered, needs input changed, set to default
        // max digits of 10, add fields to array, then check array length
        //uses valid default, but should it?
        //10 digit BVA-V H&L?    line 1652?
        //default or valid2Pt1?
        //Cannot read properties of undefined (reading 'trim')

        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(250)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.nextButton.click()
        await browser.pause(250)
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
    })
    it('will ensure validity of "3-3-4" formatting, test case #s', async () => {
        //unaltered, needs input changed
        // divide by 100, then 10, then 1, (modulus?) assign each value to array position, as opposed to assigning full 3 char value to 1 address in array
        //3-3-4 quantity of digits per field, similar approach?
        // when addressing number of chars in field, set value to 1234, test whether final char is 4, if not, then only allowed 3 chars? 
        //"pop" if starts with 1?

        // if when /1000 =0 error (not 3 digits unless leading 0)?
        //phone1[]=input, etc; array.length(phoneX) ?= (ternary)

        //format, VP 3-3-4 
        // valid3Pt?  line 1638 "858-588-2300" and then expect failure? 
        //Cannot read properties of undefined (reading 'trim')


        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(250)
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await RegisterPage.nextButton.click()
        await browser.pause(250)
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
    })
})



    describe.skip('Addressing three phone number fields, this negative test suite, phone number application...', () => {
        it('will test rejection of greater than 10 digits, (IP) change to test case #s', async () => {
            //input changed
            //uses testData ##   title invalid1-1? for first test, field 1?
            //not greater than 10 digits (w/0 leading 1? etc) (IP), 12 digits; 858588230012 (excel line 2311) (includes a leading 1 there)
            //should pass even though invalid data b/c won't accept additional digits?
            //false negative? will fail to generate error flag though it should
            //invalid1Pt1 -3
            //Cannot read properties of undefined (reading 'trim')
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(250)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneI.invalid1Pt1, testValues.phoneI.invalid1Pt2, testValues.phoneI.invalid1Pt3)         //setting values for firstNameField? (parameter called in function)
            await RegisterPage.nextButton.click()
            await browser.pause(250)
            await expect(RegisterPage.errorPhoneField3).toBeExisting()
        })
        it('will test rejection of less than 10 digits, IP change to test case #s', async () => {
            //changed
            //not less than 10 digits (IP), 8 digits
            //should fail (thus pass) due to insufficient digits in field
            //invalid2Pt1 - 3
            //line 1862
            //Cannot read properties of undefined (reading 'trim')
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(250)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneI.invalid2Pt1, testValues.phoneI.invalid2Pt2, testValues.phoneI.invalid2Pt3)  
            await RegisterPage.nextButton.click()
            await browser.pause(250)
            await expect(RegisterPage.errorPhoneField3).toBeExisting()
        })
        it('will test rejection of alphabetic characters, change to test case #s or include tag', async () => {
            // changed
            //disallow letters; check that each char in array is 1-0, as opposed to detecting alpha or symbols?
            //include check for spaces and accents?
            //line 2129
            //invalid3 ?
            //Cannot read properties of undefined (reading 'trim')
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(250)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneI.invalid3Pt1, testValues.phoneI.invalid3Pt2, testValues.phoneI.invalid3Pt3)  
            await RegisterPage.nextButton.click()
            await browser.pause(250)
            await expect(RegisterPage.errorPhoneField3).toBeExisting()
        })
        it('will test the rejection of symbols, change to test case #s or include tag', async () => {
            //changed
            //disallow symbols; check that each char in array is 1-0, as opposed to detecting alpha or symbols?
            //include check for spaces and accents?
            //invalid4  line 2143
            //Cannot read properties of undefined (reading 'trim')
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(250)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneI.invalid4Pt1, testValues.phoneI.invalid4Pt2, testValues.phoneI.invalid4Pt3)  
            await RegisterPage.nextButton.click()
            await browser.pause(250)
            await expect(RegisterPage.errorPhoneField3).toBeExisting()
        })
        it('will test rejection of spaces, change to test case #s or include tag', async () => {
            //changed
            //disallow Spaces; check that each char in array is 1-0, as opposed to detecting alpha or symbols?
            //include check for spaces and accents?
            //invalid5      line2213        "619 588 2300"
            //because of spaces, might trim() automatically?
            //Cannot read properties of undefined (reading 'trim')
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(250)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneI.invalid5Pt1, testValues.phoneI.invalid5Pt2, testValues.phoneI.invalid5Pt3)  
            await RegisterPage.nextButton.click()
            await browser.pause(250)
            await expect(RegisterPage.errorPhoneField3).toBeExisting()
        })
        it('will test rejection of accents, change to test case #s or include tag', async () => {
            //changed
            //disallow accents  
            //invalid6     line 2227
            //Cannot read properties of undefined (reading 'trim')
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(250)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneI.invalid6Pt1, testValues.phoneI.invalid6Pt2, testValues.phoneI.invalid6Pt3)  
            await RegisterPage.nextButton.click()
            await browser.pause(250)
            await expect(RegisterPage.errorPhoneField3).toBeExisting()
        })

        it('will test rejection of 11 characters, BVA-I change to test case #s or include tag', async () => {
            //changed
            //disallow 11 (BVA-I)
            //should false-negative? (won't accept 11th character, so no error, so "fails")
            //invalid7     line 2171
            //Cannot read properties of undefined (reading 'trim')
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(250)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneI.invalid7Pt1, testValues.phoneI.invalid7Pt2, testValues.phoneI.invalid7Pt3)  
            await RegisterPage.nextButton.click()
            await browser.pause(250)
            await expect(RegisterPage.errorPhoneField3).toBeExisting()
        })

        it('will test rejection of 9 characters, BVA-I change to test case #s or include tag', async () => {
            //changed
            //disallow 9 (BVA-I)
            //should fail (thus pass)  
            //invalid8     line 2185
            //Cannot read properties of undefined (reading 'trim')
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(250)
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneI.invalid8Pt1, testValues.phoneI.invalid8Pt2, testValues.phoneI.invalid8Pt3)  
            await RegisterPage.nextButton.click()
            await browser.pause(250)
            await expect(RegisterPage.errorPhoneField3).toBeExisting()
        })

})

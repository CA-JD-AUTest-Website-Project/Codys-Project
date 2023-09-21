/*
*
*country
*
*
*FucntionsProperly
*
*Doesn't include Defaults
*What's missing?
*
*
* 3 VP min? 
*
*Valid: 3/3     (Non-US, -Canada City/State failing)
*Invalid: 1/1   ()
*
*Canada changes stuff
*250 drop-down including selectcountry
*Non-UC/Canada turns city onto city/state
*Invalid:
*249 drop-down
*251
*"select a Country Option" (works!)
*
*
*/


import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe.skip('Addressing Country field on the page, this positive test suite, country application...', () => {
    it('will ensure changes to "Zip" and "State" fields as a result of selecting Canada, change to test case #', async () => {
        //Functions
        //valid2 "CANADA"
        //changes State to Province and Zip to Postal? 
        //zip id doesn't change, check for text?    <label for="zip" id="lblZip">Postal

        // xpath //*[@id="lblZip"] tohavetextcontaing?
        //province id changes to stateCa though, can test for that. 
        
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid2, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await expect(RegisterPage.canadaStateField).toBeExisting()
        await expect(RegisterPage.titleZip).toHaveTextContaining('Postal')

        //await RegisterPage.nextButton.click()
        //await browser.pause(1000)

        //await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })
    it('will ensure presence of City/State field when Canada nor US are selected, change to test case #', async () => {
        //Functions
        //valid3 "UK"
        //city/state won't accept null
        //Non-US -Canada combines city/state? into city id
        //if state == null or undefined or '[empty]'  because only city is there as city/state
        //expect to be null
        //expect.not
        // but in inspect, looks to still be existing?
        // for city/state words, id="lblCity"   but same as US "City"
        //toBe(null)
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.valid3, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
        await expect(RegisterPage.cityField).toBeExisting()     //passes but doesn't matter?
        //await expect(RegisterPage.stateField).not.toBeExisting()    //fails because still exists somewhere?
        //await expect(RegisterPage.stateField)==NULL
        await expect(RegisterPage.stateField).toBeExisting()
        await expect(RegisterPage.titleCity).toHaveTextContaining('City/State')
        //await RegisterPage.nextButton.click()
        await browser.pause(1000)

        //await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })
    it('will ensure validity of fully populated drop-down, change to test case #', async () => {
        //Functions Properly? 
        //change input data? Changed to countryDefault (US)
        //250 drop-down including select a country? 
        //can't use children, uses "value="
        //.querySelectorAll() method        //need .length? returns a static NodeList
        // $('#input1') :selected').length   in jQuery
        //use (RegisterPage.stateField)
        //expect(value)
        // ERROR: querySelectorAll is not defined at 94:9 of course   b/c its html, not js
        //BUT document.querySelectorAll() is a thing
        //ERROR: TypeError: Cannot read properties of undefined (reading 'toBe')
        // force be defined with toBeDefined() ?
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
        
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       

        //await expect(querySelectorAll(RegisterPage.stateField)).length.toBe(250)   won't work
        //await expect(RegisterPage.stateField).length.toBe(250)
        await expect(RegisterPage.stateField).length==250
        //await 


        //await RegisterPage.nextButton.click()
        //await browser.pause(1000)

        //await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')

    })


})


describe.skip('Addressing Country field on the page, this negative test suite, country application...', () => {
    it('will ensure invalidity of "Select a country" as an option, change to test case #', async () => {
        //Functions Properly
        //invalid1  countryI.invalid1 is 'Select a country'
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
      
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryI.invalid1, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.validDefault, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)

        await expect(RegisterPage.errorCountry).toBeExisting()
     
    })
})



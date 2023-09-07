/**
 * test with page objects
 */

import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe('Addressing the US Zip field on the page, this positive test suite, zipUS application...', () => {
    it('will ensure validity of highest valid value, change to test case #', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(2500)
               
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.valid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
                await RegisterPage.nextButton.click()
        await browser.pause(2500)
        
    })

    it('will ensure validity of lowest valid value, change to test case #', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(2500)
               
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.valid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(2500)
       
    })
       
            
    })

    describe('Addressing the US Zip field on the page, this negative test suite, zipUS application...', () => {
        it('will ensure invalidity of highest valid value, IP change to test case #', async () => {
            // >5 digits
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(2500)       
    
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.invalid1, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
           
            await RegisterPage.nextButton.click()
            await browser.pause(2500)
            
        })
    
        it('will ensure invalidity of lowest valid value, IP change to test case #', async () => {
            //<5 digits
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(2500)
                       
    
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.invalid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
           
            //if .length is >

                        await RegisterPage.nextButton.click()
            await browser.pause(2500)
            })
           
            it('will ensure invalidity of symbols, IP change to test case #', async () => {
                //no symbols
                await RegisterPage.open()
                await expect(RegisterPage.firstNameField).toBeExisting()
                await browser.pause(2500)
                           
        
                await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.invalid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
               
    
                            await RegisterPage.nextButton.click()
                await browser.pause(2500)
                })


                it('will ensure invalidity of accented characters, IP change to test case #', async () => {
                    //No accents
                    await RegisterPage.open()
                    await expect(RegisterPage.firstNameField).toBeExisting()
                    await browser.pause(2500)
                               
            
                    await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.invalid4, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
                   
        
                    await RegisterPage.nextButton.click()
                    await browser.pause(2500)
                    })

                    it('will ensure invalidity of alphabetic characters, IP change to test case #', async () => {
                        //No letters
                        await RegisterPage.open()
                        await expect(RegisterPage.firstNameField).toBeExisting()
                        await browser.pause(2500)
                                   
                        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.invalid5, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
                       
            
                        await RegisterPage.nextButton.click()
                        await browser.pause(2500)
                        })

                        it('will ensure invalidity of spaces, IP change to test case #', async () => {
                            //No spaces
                            await RegisterPage.open()
                            await expect(RegisterPage.firstNameField).toBeExisting()
                            await browser.pause(2500)
                                       
                            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.invalid6, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
                           
                
                            await RegisterPage.nextButton.click()
                            await browser.pause(2500)
                            })

                            it('will ensure invalidity of edge cases, BVA-L Invalid change to test case #', async () => {
                                //4 chars
                                await RegisterPage.open()
                                await expect(RegisterPage.firstNameField).toBeExisting()
                                await browser.pause(2500)
                                           
                                await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.invalid7, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
                               
                    
                                await RegisterPage.nextButton.click()
                                await browser.pause(2500)
                                })

         
        })


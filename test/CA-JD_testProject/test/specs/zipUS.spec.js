/**
 * test with page objects
 */

/*

Test suites for Valid and Invalid US Zip codes

*/



import RegisterPage from '../pageobjects/register.page.js'
import { testValues } from '../testData/testData.js'

describe('Addressing the US Zip field on the page, this positive test suite, zipUS application...', () => {
    it('will ensure validity of highest valid value, change to test case #', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
               
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.valid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)
        //await expect(RegisterPage.regSolo).toBeExisting()
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
        
    })

    it('will ensure validity of lowest valid value, change to test case #', async () => {
        await RegisterPage.open()
        await expect(RegisterPage.firstNameField).toBeExisting()
        await browser.pause(1000)
               
        await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipV.valid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
       
        await RegisterPage.nextButton.click()
        await browser.pause(1000)
        //await expect(RegisterPage.regSolo).toBeExisting()
        await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
       
    })
       
            
    })

    describe('Addressing the US Zip field on the page, this negative test suite, zipUS application...', () => {
        it('will ensure invalidity of highest valid value, IP change to test case #', async () => {
            // >5 digits, invalid1
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(1000)       
    
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipI.invalid1, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
           
            await RegisterPage.nextButton.click()
            await browser.pause(1000)
            //await expect(RegisterPage.regSolo).toBeExisting()
            await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
            
        })
    
        it('will ensure invalidity of lowest valid value, IP change to test case #', async () => {
            //<5 digits, invalid2
            await RegisterPage.open()
            await expect(RegisterPage.firstNameField).toBeExisting()
            await browser.pause(1000)
                       
    
            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipI.invalid2, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
           
            //if .length is >

                        await RegisterPage.nextButton.click()
            await browser.pause(1000)
            //await expect(RegisterPage.regSolo).toBeExisting()
            await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
            })
           
            it('will ensure invalidity of symbols, IP change to test case #', async () => {
                //no symbols, invalid3
                await RegisterPage.open()
                await expect(RegisterPage.firstNameField).toBeExisting()
                await browser.pause(1000)
                           
        
                await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipI.invalid3, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
               
    
                            await RegisterPage.nextButton.click()
                await browser.pause(1000)
                //await expect(RegisterPage.regSolo).toBeExisting()
                await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
                })


                it('will ensure invalidity of accented characters, IP change to test case #', async () => {
                    //No accents, invalid4
                    await RegisterPage.open()
                    await expect(RegisterPage.firstNameField).toBeExisting()
                    await browser.pause(1000)
                               
            
                    await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipI.invalid4, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
                   
        
                    await RegisterPage.nextButton.click()
                    await browser.pause(1000)
                    //await expect(RegisterPage.regSolo).toBeExisting()
                    await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
                    })

                it('will ensure invalidity of alphabetic characters, IP change to test case #', async () => {
                    //No letters, invalid5
                    await RegisterPage.open()
                    await expect(RegisterPage.firstNameField).toBeExisting()
                    await browser.pause(1000)
                                   
                    await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipI.invalid5, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
                       
            
                    await RegisterPage.nextButton.click()
                    await browser.pause(1000)
                    //await expect(RegisterPage.regSolo).toBeExisting()
                    await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
                    })

                        it('will ensure invalidity of spaces, IP change to test case #', async () => {
                            //No spaces, invalid6
                            await RegisterPage.open()
                            await expect(RegisterPage.firstNameField).toBeExisting()
                            await browser.pause(1000)
                                       
                            await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipI.invalid6, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
                           
                
                            await RegisterPage.nextButton.click()
                            await browser.pause(1000)
                            //await expect(RegisterPage.regSolo).toBeExisting()
                            await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
                            })

                            it('will ensure invalidity of edge cases, BVA-L Invalid change to test case #', async () => {
                                //4 chars, invalid7
                                await RegisterPage.open()
                                await expect(RegisterPage.firstNameField).toBeExisting()
                                await browser.pause(1000)
                                           
                                await RegisterPage.accntCreate(testValues.firstNameV.validDefault, testValues.lastNameV.validDefault, testValues.eMailV.validDefault, testValues.passwordV.validDefault, testValues.confirmV.validDefault, testValues.addressV.validDefault, testValues.aptSteUnitV.validDefault,  testValues.countryV.validDefault, testValues.cityV.validDefault, testValues.stateV.validDefault, testValues.zipI.invalid7, testValues.phoneV.validDefaultPt1, testValues.phoneV.validDefaultPt2, testValues.phoneV.validDefaultPt3)         //setting values for firstNameField? (parameter called in function)
                               
                    
                                await RegisterPage.nextButton.click()
                                await browser.pause(1000)
                                //await expect(RegisterPage.regSolo).toBeExisting()
                                await expect(RegisterPage.joinTText).toHaveTextContaining(' existing team. Just enter ')
                                })


                                //
                                // Create invalid8, 6char BVA-H Invalid?
                                //

         
        })


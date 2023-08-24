

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstNameField () {      //value id= 'firstName'
        return $('#firstName'); //Full Xpath: /html/body/div[5]/div/div[2]/div/div[2]/div/div/div[6]/div/div[1]/form/fieldset/fieldset[1]/input
    }                           //amended Xpath: //*[@id="firstName"]

    get lastNameField () {      //Xpath: //*[@id="lastName"]
        return $('#lastName');  
    }
    get eMailField () {         //Xpath: //*[@id="emailAddress"]
        return $('#emailAddress');
    }

    get passwordField () {      //Xpath: //*[@id="password"]
        return $('#password');
    }
    get confirmPasswordField () {      //XPAth: //*[@id="confirmPassword"]
        return $('#confirmPassword');
    }

    get addressField () {       //xpath: //*[@id="address1"]
        return $('#address1');
    }
    get aptSteUnitField () {    //xpath: //*[@id="address2"]
        return $('#address2');
    }
    get countryField () {       //xpath: //*[@id="country"]
        return $('#country');
    }
    get stateField () {
        return $('#state');     //xpath: //*[@id="state"]
    }
    get canadaStateField () {   //xpath: //*[@id="stateCa"]
        return $('#stateCa');
    }

    get cityField () {          //xpath: //*[@id="city"]        //third party country's city/state is just city selector
        return $('#city');
    }
    get canadaPostalField () {  //xpath: //*[@id="zip"]
        return $('#zip');
    }
    get usZipField () {         //xpath: //*[@id="zip"]
        return $('#zip');
    }
    get phoneField1 () {        //xpath: //*[@id="phoneNumber"]
        return $('#phoneNumber');       // value maxlength="3"
    }
    get phoneField2 () {        //xpath: //*[@id="phoneNumber2"]
        return $('#phoneNumber2');       // value maxlength="3"
    }get phoneField3 () {       //xpath: 
        return $('#phoneNumber3');       // value maxlength="4"
    }
    get  nextButton() {         //xpath: //*[@id="phoneNumber3"]
        return $('button[type="button"]');          //type="button"  value="Next"  class= "btn isLastTabIndex"  id="register1Next"
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    /*
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
*/
    async accntCreate (nameF, nameL, eMail, pWord, confirmPW, addressF, apt, country, city, state, zip, phone1, phone2, phone3, province) {     //continue in fashion, new different name for parameters being passed for setValue?
        await this.firstNameField.setValue(nameF);  //continue in same way with last next line
        await this.lastNameField.setValue(nameL);
        await this.eMailField.setValue(eMail);
        await this.passwordField.setValue(pWord);
        await this.confirmPasswordField.setValue(confirmPW);
        await this.addressField.setValue(addressF);
        await this.aptSteUnitField.setValue(apt);
        await this.countryField.selectByVisibleText(country);      //Need to test with other values though
        await this.stateField.selectByVisibleText(state);            //Issues due to dropdown?
        await this.canadaStateField.setValue(province);
        await this.cityField.setValue(city);
        //await this.canadaPostalField.setValue(zip);
        //await this.usZipField.setValue(zip);
        //await this.phoneField1.setValue(phone1);
        //await this.phoneField2.setValue(phone2);
        //await this.phoneField3.setValue(phone3);



        //await this.nextButton.click();



        //await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/replicated/Account/Register');
    }
}

export default new RegisterPage();

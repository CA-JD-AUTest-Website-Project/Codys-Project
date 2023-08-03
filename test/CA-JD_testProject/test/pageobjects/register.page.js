

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

    get cityField () {          //xpath: //*[@id="city"]
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
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/replicated/Account/Register');
    }
}

export default new RegisterPage();

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

    get errorFirstName () {         //xpath     //*[@id="firstName-errorDv"]
        return $('//*[@id="firstName-errorDv"]')                  //full xpath?        /html/body/div[13]
                                    //id="firstName-errorDv"
    }


    get lastNameField () {      //Xpath: //*[@id="lastName"]
        return $('#lastName');  
    }

    get errorLastName () {
        return $('//*[@id="lastName-errorDv"]')

    }

    get errorEMail (){
        return $('//*[@id="emailAddress-errorDv"]')
    }

    get eMailField () {         //Xpath: //*[@id="emailAddress"]
        return $('#emailAddress');
    }

    get passwordField () {      //Xpath: //*[@id="password"]
        return $('#password');
    }

    get errorPassword () {
        return $('//*[@id="password-errorDv"]')
    }


    get confirmPasswordField () {      //XPAth: //*[@id="confirmPassword"]
        return $('#confirmPassword');
    }

    get errorConfirm () {
        return $('//*[@id="confirmPassword-errorDv"]')
    }

    get addressField () {       //xpath: //*[@id="address1"]
        return $('#address1');
    }

    get errorAddress () {
        return $('//*[@id="address1-errorDv"]')
    }

    get aptSteUnitField () {    //xpath: //*[@id="address2"]
        return $('#address2');  //full xpath   /html/body/div[5]/div/div[2]/div/div[2]/div/div/div[6]/div/div[1]/form/fieldset/fieldset[4]/input
    }

    //Need to determine a way to check for aptSteUnit to fail? Cannot fail, sooo...

    get countryField () {       //xpath: //*[@id="country"]
        return $('#country');
    }


    get errorCountry () {
        return $('//*[@id="country-errorDv"]')
    }

    get stateField () {
        return $('#state');     //xpath: //*[@id="state"]
    }

    get errorState () {
        return $('//*[@id="state-errorDv"]')

    }

    get canadaStateField () {   //xpath: //*[@id="stateCa"]
        return $('#stateCa');
    }

    //No error flag from leaving Province drop-down as "Province"

    get cityField () {          //xpath: //*[@id="city"]        //third party country's city/state is just city selector
        return $('#city');
    }

    get errorCity () {
        return $('//*[@id="state-errorDv"]');
    }

    get canadaPostalField () {  //xpath: //*[@id="zip"]
        return $('#zip');
    }

    //Error flag does not generate from empty Canada Postal Field, nor Other
/*
    get errorCanadaZip () {
        return $('')
    }
*/
    get usZipField () {         //xpath: //*[@id="zip"]
        return $('#zip');
    }
    get errorUSZip () {
        return $('//*[@id="zip-errorDv"]')
    }

    get phoneField1 () {        //xpath: //*[@id="phoneNumber"]
        return $('#phoneNumber');       // value maxlength="3"
    }
    get phoneField2 () {        //xpath: //*[@id="phoneNumber2"]
        return $('#phoneNumber2');       // value maxlength="3"
    }get phoneField3 () {       //xpath: //*[@id="phoneNumber3"]
        return $('#phoneNumber3');       // value maxlength="4"
    }
    get errorPhoneField3 () {
        return $('//*[@id="phoneNumber3-errorDv"]')

}

    get  nextButton() {         //xpath: //*[@id="register1Next"]
        return $('//*[@id="register1Next"]');
        //return $('button[type="button"]');          //type="button"  value="Next"  class= "btn isLastTabIndex"  id="register1Next"
    }

get joinTText() {
    return $('//*[@id="joinTeam"]/p')
}


    /*get pg2Header() {
        return $('//*[@id="register2Form"]/h2')
    }
*/
/*
    get regSolo() {
        return $('//*[@id="solo"]/h2')
    }
*/
    /*get step2Btn()  {
        return $('//*[@id="registerBtn1"]');         //full xpath /html/body/div[5]/div/div[2]/div/div[2]/div/div/div[4]/button[2]
        //normal xpath //*[@id="registerBtn1"]
    }
*/


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
    async accntCreate (nameF, nameL, eMail, pWord, confirmPW, addressF, apt, country, city, state, zip, phone1, phone2, phone3) {     //continue in fashion, new different name for parameters being passed for setValue?
        await this.firstNameField.setValue(nameF);  //continue in same way with last next line
        await this.lastNameField.setValue(nameL);
        await this.eMailField.setValue(eMail);
        await this.passwordField.setValue(pWord);
        await this.confirmPasswordField.setValue(confirmPW);
        await this.addressField.setValue(addressF);
        await this.aptSteUnitField.setValue(apt);
        await this.countryField.selectByVisibleText(country);      //Need to test with other values though
        await this.stateField.selectByVisibleText(state);            //Issues due to dropdown?
        await this.cityField.setValue(city);
        await this.usZipField.setValue(zip);
        await this.phoneField1.setValue(phone1);
        await this.phoneField2.setValue(phone2);
        await this.phoneField3.setValue(phone3);
        //await this.canadaStateField.setValue(province);   //canadaStateField w/ id #stateCa
        //await this.canadaPostalField.setValue(zip);       //

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
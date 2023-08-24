export class testValues {

    //explicitly states what is being tested in IT statement, as well as data var, therefore can use keyword to search excel for TAG
    // or can search for data value itslf, a better approach
    static firstNameV = {
    
        validDefault: 'Günther',   //Test Case 1, first of all valid values
        valid2: 'Eliza\'',     //Test Case 2
        valid3: 'Günther-',
        valid4: 'Bob',
        valid5: 'Hackjobmcgeehaveafieldinthemorninglikeinyeoldentimesbarleymowers'
    }
    
    static firstNameI = {     //invalid thingies... Case Type such as firstNameIP, firstNameBVAL, firstNameEP?
                            //each invalid data for a different test case
        invalid1: 'Hu',      //first invalid name  with Tag ##
        invalid2: '8Günther8',          //DO NOT rename as invalid tag ## ? >8
        invalid3: '*Günther*',           // if value changes, update excel sheet ASAP, and vosa versa
        invalid4: 'Hackjobmcgeehaveafieldinthemorninglikeinyeoldentimesbarleymowersz'               // nor aplhaebet soup        
    }
    
    static lastNameV = {
        validDefault: 'Have\'feld',
        valid2: '-Westchestershire',
        valid3: 'Peña',
        valid4: 'Dud',
        valid5: 'Hackjobmcgeehaveafieldinthemorninglikeinyeoldentimesbarleymowers'
    }
    
    static lastNameI = {
        invalid1: 'Bo',
        invalid2: 'Hav3\'feld',
        invalid3: 'Have&feld',
        invalid4: 'Hackjobmcgeehaveafieldinthemorninglikeinyeoldentimesbarleymowersz'
    }
    
    static eMailV = {
        validDefault: '<Jacksolittlé!>@gmail.com',
        valid2: 'SA@x.co',
        valid3: 'Hackjobmcgeehaveafieldinthemorninglikeinyeoldentimesba@gmail.com'
    }
    
    static eMailI = {
        invalid1: 'A@x.co',
        invalid2: '<Jack@do1ittlé!>@gmail.com',
        invalid3: 'Hackjobmcgeehaveafieldinthemorninglikeinyeoldentimesbar@gmail.com'
    }
    
    static passwordV = {
        validDefault: '*Wisew0mbat!*',
        valid2: 'Womba1',
        valid2: 'Hackjobmcgeehaveafieldinthemorninglikeinyeoldentimesbarleymower3'
    }
    
    static passwordI = {
        invalid1: 'Womb1',
        invalid1: 'Günther#1',                 //contains first name
        invalid1: 'Have\'feld#2',              //containst last name
        invalid1: '<Jacksolittlé!>@gmail.com', //same as email
        invalid1: '*wisew0mbat!*',
        invalid1: '*Wisewombat!*',
        invalid1: '*Wisew0mbat*',
        invalid1: 'Hackjobmcgeehaveafieldinthemorninglikeinyeoldentimesbarleymower3z'
    }
    
    static confirmV = {
        validDefault: '*Wisew0mbat!*' //must be same as password
    }
    
    static confirmI = {
        invalid1: 'Womba1' //must be diffrent from password
    }
    
    static addressV = {
        validDefault: '7791 Piña-Pizza St.',
        valid2: '7791',
        valid4: '8854 oldmcdonaldhadafarmeieioandonthat-farmhehadadogeieiobar St.'
    }
    
    static addressI = {
        invalid1: '779',
        invalid2: '8854 oldmcdonaldhadafarmeieioandonthat-farmhehadadogeieiobark St.',
        invalid3: '7791 @Piña-Pizza St.'
    }
    
    static aptSteUnitV = {
        validDefault: '#15',
        valid2: '2345',
        valid3: '1234567890',
        valid4: '123'
    }
    
    static aptSteUnitI = {
        invalid2: '26',
        invalid3: '12345678909',
        invalid4: '025',
        invalid5: '3',
        invalid6: '&15',
        invalid7: '26'
    }
    
    static countryV = {
        validDefault: 'UNITED STATES',
        valid2: 'Canada',
        valid3: 'UK'
    
    
    }
    
    static countryI = {
        invalid1: 'Select a country'
    }
    
    static cityV = {
        validDefault: 'San Diego',
        valid2: 'San José',
        valid3: 'Winston-Salem',
        valid4: 'Rock',
        valid5: 'Llangofairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogogogoch'
    }
    
    static cityI = {
        invalid1: 'San Diego!',
        invalid2: 'San Dieg0',
        invalid3: 'Bet',
        invalid4: 'Llangofairpwllgwyngyllgogyerychwyrndrobwllllantysiliogogogogogoch'
    }
    
    static stateV = {
        validDefault: 'CA',
        valid2: 'VA',
        valid3: 'L'
    }
    
    static stateI = {
        invalid1: '45', //corrosponds with state letters
        invalid2: '&%',
        invalid3: 'ARI', //will give idaho instead of arkansas
        invalid4: 'State',
    }
    
    static provinceV = {
        validDefault: 'AB',
        valid2: 'A'
    }
    
    static provinceI = {
        invalid1: '23',
        invalid2: '*^',
        invalid3: 'Provience',
        invalid4: 'ONT' // turns from Ontario to Prince Edwards
    }
    
    static zipV = {
        validDefault: '15214',
        valid2: '00501', //lowest valid zip value
        valid3: '99950'
    }
    
    static zipI = {
        invalid1: '919416803', //no idea where this value came from
        invalid2: '919',
        invalid3: '9!941',
        invalid4: '15ü14', //seems neither of us are sure why this one exists
        invalid5: '9A941',
        invalid6: '9 941',
        invalid7: '9194'
    }
    
    static zipCanadaV = { //Note I have no idea about any of these values 
        validDefault: 'K1A 0B1', //if somethings wrong bring it up
    }
    
    static zipCanadaI = {
        invalid1: 'K1A0B1',
        invalid2: 'K1A 0B1C',
        invalid3: 'K1A 0',
        invalid4: '!1A 0B1'
    }
    
    static zipOtherV = {
        validDefault: '15214', //Isn't this the same as US default?
        valid2: '15214-6803',
        valid3: '15214ü41251',
        valid4: '15214 6803',
        valid5: '152',
        valid6: '1521441251'
    }
    
    static zipOtherI = {
        invalid1: '15',
        invalid2: '15214041251',
        invalid3: '1',
        invalid4: '152140041251',
        invalid5: '^(`O\')^'
    }
    
    static phoneV = {
        validDefaultPt1: '858',
        validDefaultPt2: '588',
        validDefaultPt3: '2300'
    
    
    }
    
    static phoneI = {
        invalid1: ''
    
    
    }
    }
    
    
    /*
    for Array[ContainsAllFields], n++ through all fields, <Array.length){
            //enters all valid fields 0 through n
            if n = field being changed
                n++
                x=n
    
    then outside for loop, as changing field has been skipped, Array[x] = InvalidValue
    
    
    */
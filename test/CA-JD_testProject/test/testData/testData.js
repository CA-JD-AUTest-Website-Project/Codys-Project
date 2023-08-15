export class testValues {

    //explicitly states what is being tested in IT statement, as well as data var, therefore can use keyword to search excel for TAG
    // or can search for data value itslf, a better approach
    static firstNameV = {
    
        validDefaul: 'Günther',   //Test Case 1, first of all valid values
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
        valid2: ''
    
    
    }
    
    static addressI = {
        invalid1: ''
    
    
    }
    
    static aptSteUnitV = {
        validDefault: '#15',
        valid2: ''
    
    
    }
    
    static aptSteUnitI = {
        invalid1: ''
    
    
    }
    
    static countryV = {
        validDefault: 'UNITED STATES',
        valid2: ''
    
    
    }
    
    static countryI = {
        invalid1: ''
    
    
    }
    
    static cityV = {
        validDefault: 'San Diego',
        valid2: ''
    
    
    }
    
    static cityI = {
        invalid1: ''
    
    
    }
    
    static stateV = {
        validDefault: 'CA',
        valid2: ''
    
    
    }
    
    static stateI = {
        invalid1: ''
    
    
    }
    
    static provinceV = {
        validDefault: '',
        valid2: ''
    
    
    }
    
    static provinceI = {
        invalid1: ''
    
    
    }
    
    static zipV = {
        validDefault: '15214',
        valid2: ''
    
    
    }
    
    static zipI = {
        invalid1: ''
    
    
    }
    
    static zipCanadaV = {
        validDefault: '',
        valid2: ''
    
    
    }
    
    static zipCanadaI = {
        invalid1: ''
    
    
    }
    
    static zipOtherV = {
        validDefault: '',
        valid2: ''
    
    
    }
    
    static zipOtherI = {
        invalid1: ''
    
    
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
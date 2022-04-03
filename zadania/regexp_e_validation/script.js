//REGEXP exercise

//function, finding a valid postal code in a string
function validatePostalCode(string) {
    var rule = /[A-Z]{2}[0-9]{2}\-?[0-9]{3}/g;
    var result = string.match(rule);
    
    //not found - let's return an information about it
    if(result == null) {
        result = "no postal code found";
    }
    
    return result;
}


var p = validatePostalCode("This is my postal code: DE12100");
console.log(p);

p = validatePostalCode("This is my postal code: DE12-100");
console.log(p);

p = validatePostalCode("There is no postal code here");
console.log(p);
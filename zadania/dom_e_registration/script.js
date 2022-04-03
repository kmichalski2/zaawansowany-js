//DOM registration form

//function executed when document is ready
window.onload = function() {
    
    document.querySelector("#input-submit").onclick = function() {
        //variable to print all the error messages
        var msg = '';
        
        //variable storing an information if everything was correct
        var ok = true;
        
        //validating the inputs
        let validName = validateName(document.querySelector("#input-name").value);
        console.log("name " + validName);
        if(validName === false) {
            ok = false;
            msg += 'Invalid name. ';
        }
        
        let validEmail = validateEmail(document.querySelector("#input-email").value);
        console.log("email " + validEmail);
        if(validEmail === false) {
            ok = false;
            msg += 'Invalid email. ';
        }
        
        let validPhone = validatePhone(document.querySelector("#input-phone").value);
        console.log("phone " + validPhone);
        if(validPhone === false) {
            ok = false;
            msg += 'Invalid phone. ';
        }
        
        let validPassword = validatePassword(document.querySelector("#input-password").value);
        console.log("password " + validPassword);
        if(validPassword === false) {
            ok = false;
            msg += 'Invalid password. ';
        }
        
        if(ok) {
            msg = 'Everything is correct';
        }
        
        document.querySelector("#msg").innerText = msg;
        return false;
    }

    document.querySelector("#input-reset").onclick = function(e) {
        document.querySelector("#msg").innerText = 'Fill in the form';
    }
};

//validator functions
function validateName(string) {

    pattern = /^[A-Za-z]+\s[A-Za-z]+/;

    return pattern.test(string);
}

function validateEmail(string) {

    pattern = /^\w+@\w+\.[a-z]+/;

    return pattern.test(string);
}

function validatePhone(string) {

    pattern = /^[0-9\-\s]{9,15}/;

    return pattern.test(string);
}

function validatePassword(string) {

    pattern = /^[^\s]{8,20}/;

    return pattern.test(string);
}

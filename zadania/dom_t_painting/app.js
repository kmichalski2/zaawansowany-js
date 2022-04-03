//function called when document loads to browser
window.onload = function(){
    console.log("it works");

    //current option switched on
    var tool = 1;

    //switching on a chosen option
    document.querySelector("#submit").onclick = function(e){
        tool = parseInt(document.querySelector("#tool").value);
    }

    //TODO write your code

    

}



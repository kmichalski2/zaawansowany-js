window.onload = function(){
    
    // document.querySelector("#submit").addEventListener('click', (e) => {})
    document.querySelector("#submit").onclick = function(e){
        
        //preventing default action - sending a form
        e.preventDefault();
        
        //here we will store the result
        var result = 0;
        
        //data from the form
        const number1 = document.querySelector("#number1");
        var a = number1.value;
        var b = document.querySelector("#number2").value;
        var operation = document.querySelector("#operation").value;
       
        //let's make sure we have numbers only
        a = parseFloat(a);
        b = parseFloat(b);
        
        //performing the operations
        switch(operation){
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "/":
                if(b == 0){
                    result = "you cannot divide by zero";
                } else{
                    result = a / b;
                }
                break;
            case "*":
                result = a * b;
                break;
            default:
                result = "invalid operation";
                break;
            
        }
        
        //displaying result in DOM
      //  document.querySelector("#screen").innerText = '<strong>' + result + '</strong>';;
       document.querySelector('#screen').innerHTML = '<strong>' + result + '</strong>';

    }
    
    
}

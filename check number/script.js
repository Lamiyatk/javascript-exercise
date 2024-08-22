let value1 = parseInt(prompt("Enter first number"));
let value2 = parseInt(prompt("Enter second number"));

function checkNumber(value1,value2){
    let result;
    if (value1 > 0 && value2 < 0 ){
        result = ("value1 is positive and value2 is negative");
    }else if (value1 < 0 && value2 >0){
        result = ("value1 is negative and value2 is positive");
    }
    
     return result;
}

 console.log('Result:',checkNumber(value1,value2));
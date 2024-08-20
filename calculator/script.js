let result;
let value1 = parseInt(prompt("value1"));
let operation =(prompt("operation"));
let value2 = parseInt(prompt("value2"));


function calculator(value1,operation,value2) {
    switch(operation){
        case "+":
         result = value1 + value2;
          break;
        case "-":
         result = value1 - value2;
          break;
        case "/":
         result = value1 / value2;
          break;
        case "*":
         result = value1 * value2;
          break;
        case "%":
          result = value1 % value2;
          break;
  }
  return result;

 }
 
 console.log("result:",calculator(value1,operation,value2));
 

let result;
let value1 = parseInt(prompt("Enter value1"));
let operation =(prompt("operation"));
let value2 = parseInt(prompt("Enter value2"));


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
        default:
          result = "invalid operation";
  }
  return result;

 }
 
 console.log("result:",calculator(value1,operation,value2));
 

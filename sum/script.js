let num1 = parseInt(prompt("Enter first number"));
let num2 = parseInt(prompt("Enter second number"));

function sum(num1,num2) {
    let result;

    if (num1 === num2){
    let sum =num1 + num2;
       result = sum * 3;
    }else {
       result = num1 + num2;
    }
    return result;
}
  console.log('Result:',sum(num1,num2));


   
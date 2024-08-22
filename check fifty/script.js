let num1 =parseInt(prompt("Enter first number"));
let num2 =parseInt(prompt("Enter second number"));

function CheckNumFifty(num1,num2){
    let result;
    if (num1 === 50 && num2 != 50 ){
        result = "True";
    } else if (num1 != 50 && num2 === 50){
        result = "True";
    } else if(num1 + num2 === 50 ){
        result = "True";
    } else {
        result = "False";
    }
      return result;
}
console.log('Result:',CheckNumFifty(num1,num2));






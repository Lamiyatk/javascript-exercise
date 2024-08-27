let num = prompt("Enter a number");
function Multiple(num){
    let result;
    if (num % 3 === 0){
        result = "its a multiple of 3 "  
       }else if (num % 7 === 0){
        result = "its a multiple of 7"
       }else{
       result = "Not a multiple of 3 and 7"
}

return result;
}
console.log('The number is:',Multiple(num));


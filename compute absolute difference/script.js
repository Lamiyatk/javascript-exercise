let value =prompt("Enter a value");
function getdifference(value){
    let result;
    if(value > 19){
        result = (value - 19) * 3;
    } else {
        result = 19 - value;

    }
    return result;
}
console.log('Result:',getdifference(value));
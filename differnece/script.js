let result;
let num = prompt("Enter a number");
function getdifference(num) {
    if (num > 13) {
        result = (num - 13) * 2;
    } else {
        result = 13 - num;
    }
    return result;
    
}

console.log('Result:',getdifference(num));
let result;
let choose =parseInt(prompt ("choose a number"));
function getRandomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomnum = getRandomNum(1,10);
console.log("Random Number:",randomnum);

if (choose === randomnum) {
    result = "Good Work";
} else {
    result = "Not Matched";
}

console.log("Result:",result);


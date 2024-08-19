let result;
let choose = prompt ("choose");
function getRandomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Randomnum = getRandomNum(1,10);
if (choose === "1") {
    result = "Good Work";
}else {
    result = "Not Matched";
    
}
console.log('result:',result);


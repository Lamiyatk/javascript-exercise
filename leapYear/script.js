// Leap Year

let result;
let year= prompt("year");
function LeapYear (year) {
if ( year % 400 === 0) {
    result = "LeapYear";
}else if(year % 100 === 0){
    result = "its not a LeapYear";
}else if(year % 4 === 0){
    result = "LeapYear";
}else {
    result = "its not a Leap Year";
}
return result;

}
console.log('result:',LeapYear(year));

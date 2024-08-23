
let temp =prompt("convert into fahrenheit ");
let temperature  = prompt("convert into celsius");

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;

}
function fahrenheitTocelsius(fahrenheit) {
     return  (fahrenheit - 32) * 5/9;

}
console.log("temperature in fahrenheit is:",celsiusToFahrenheit(temp));
console.log("temperature in celsius is:",fahrenheitTocelsius(temperature));

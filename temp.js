function celsiusToFahrenheit(celsius) {
    return  (celsius * 9/5) + 32;
}
function fahrenheitTocelsius(fahrenheit) {
     return (fahrenheit - 32) * 5/9;
}

let celsius = 60;
let fahrenheit = 45;

console.log("result:",celsiusToFahrenheit(celsius));
console.log("result:", fahrenheitTocelsius(fahrenheit));

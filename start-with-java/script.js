let str = prompt("Enter a string");
function CheckStringStartWith(str){
    let result;
    if(str.substring(0,4) === "java"){
    result = "True";
}else{
    result = "False"
}
return result;

}
console.log(CheckStringStartWith(str));
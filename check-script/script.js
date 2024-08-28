let str = prompt("Enter a string with script");

function CheckPositionAndRemove(str){
    let result;
   if (str.substring(4,10) === "script"){
        result = str.slice(0,4) + str.slice(10);
    }else{
        result = str;
    }
    return result;
        
}
console.log('Result:',CheckPositionAndRemove(str));
function ChangePositonFirstAndLast(str){
  let length = str.length;
  
  return (
 str.charAt(str.length -1) + str.substring(1,length) + str.charAt(0));

}

console.log(ChangePositonFirstAndLast("World"))
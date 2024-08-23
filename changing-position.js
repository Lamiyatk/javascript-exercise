function ChangePositonFirstAndLast(str){
  let length = str.length;
  if (length <= 1){
  }
  
  
  return (
 str.charAt(str.length -1) + str.substring(1,length -1) + str.charAt(0));

}

console.log(ChangePositonFirstAndLast("World"));
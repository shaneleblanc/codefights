function checkPalindrome(inputString) {
var str = inputString.toLowerCase();
var arr = str.split("");
var back = "";
   for(var i = arr.length-1; i>=0; --i){
     back += arr[i];
   }
  console.log(back);
   if(back === inputString){
   return true; }
   else { return false; }
}
console.log(checkPalindrome("racecar"));

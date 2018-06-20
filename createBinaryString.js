// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.

// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.

function createBinaryString (nMask) { //thanks https://stackoverflow.com/a/24153275 for this method
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
}
function arrayPacking(a) {
var M = "";
    a.reverse();
    for(var i in a){
        var x = createBinaryString(a[i]).substr(24,8);
        M += ''+x;
    }
    return parseInt(M, 2);
}

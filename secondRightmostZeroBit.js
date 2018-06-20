// Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

// Return the value of 2position_of_the_found_bit.

function secondRightmostZeroBit(n) {
  return -~((n-~(n^(n+1))/2)^(n-~(n^(n+1))/2+1))/2;
}

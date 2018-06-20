// You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

// Return the value of 2position_of_the_found_bit (0-based).
// 

function differentRightmostBit(n, m) {
  return -~((~(n^m))^((~(n^m))+1))/2;
}

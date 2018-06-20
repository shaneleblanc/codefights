// You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.

function swapAdjacentBits(n) {
  return ((n & 0xAAAAAAAA) >> 1) | ((n & 0x55555555) << 1);
}

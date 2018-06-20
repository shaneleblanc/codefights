# Reverse the order of the bits in a given integer.
mirrorBits = a => { return parseInt(a.toString(2).split('').reverse().join().replace(/,/g,''), 2); }

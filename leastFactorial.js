// Given an integer n, find the minimal k such that

// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.

function leastFactorial(n) {
var rval=1;
var results = [];
for (var i = 2; i <= n; i++){
  rval = rval * i;
    if(rval >= n) results.push(rval);
}
if(n == 1 || n == 0) return 1;
return Math.min(...results);

}

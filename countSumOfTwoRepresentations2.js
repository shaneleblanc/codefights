// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

countSumOfTwoRepresentations2 = (n, l, r) => {
    let res = 0;
    for(var a = l; a <= r; a++){
        var b = n-a;
        if(a >= l && a <= b && b <= r) { console.log(a+" + "+b); res++; }
    }
    return res; 
}

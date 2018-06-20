// A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

// Given two integers, find the result which the little boy will get.

// Note: the boy used this site as the source of knowledge, feel free to check it out too if you are not familiar with column addition.

function additionWithoutCarrying(param1, param2) {
    var p1 = String(param1).split(''), p2 = String(param2).split('');
    var l = Math.max(p1.length, p2.length), res = [];
    while(p1.length < p2.length) p1.unshift(0);
    while(p2.length < p1.length) p2.unshift(0);
    for(var i = 1; i <= l; i++){
        var num1 = Number(p1[p1.length-i]), num2 = Number(p2[p2.length-i]);
        num1 += num2;
        var x = String(num1).split(''); 
        res.unshift(x[x.length-1]);
    }
    return Number(res.join().replace(/,/g,''));

}

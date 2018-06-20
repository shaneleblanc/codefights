function adjacentElementsProduct(inputArray) {
    var products = [], p = 0;
  for (i = 0; i < inputArray.length-1;i++) 
   {
     var b = i + 1;
     p = inputArray[i];
     p *= inputArray[b];
     products.push(p);
    }
    return Math.max(...products);
}

# Given a matrix (i.e. an array of arrays), find its submatrix obtained by deleting the specified rows and columns.

function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
    var rtd = rowsToDelete.length, ctd = columnsToDelete.length-1, res = JSON.parse(JSON.stringify(matrix));
for(var i = 0; i < rowsToDelete.length; i++){
    let delrow = rowsToDelete[i];
    res.splice(delrow,1);
}
    console.log(res);
while(ctd >= 0){
    let delcol = columnsToDelete[ctd];
    for(var x = 0; x < res.length; x++){
        
        res[x].splice(delcol, 1);
    }    
    ctd--;
}
return res;
}

function spiralOrder (matrix) {
  let res = [];
  while (matrix.length){
    res.push(...matrix.shift());  //take first row
    for (let row of matrix){      //take last item in rest
        if (row.length) {res.push(row.pop()); row.reverse();}
    }
    matrix.reverse();
  }
  return res;
}

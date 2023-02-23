function luckyNumbers (matrix) {
    let res = [], min = [];
    for (let i=0; i<matrix.length; i++) {
       min.push(Math.min(...matrix[i]));
    }
    for (let i=0; i<matrix[0].length; i++) {
       let m = Math.max(...matrix.map(x => x[i]));
       if (min.includes(m)) res.push(m);
    }
    return res;
}

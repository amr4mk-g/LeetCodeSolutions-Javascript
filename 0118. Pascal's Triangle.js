function generate (numRows) {
    let result = [];
    for (let i=1; i<=numRows; i++) {
        let x = [];
        for (let j=1; j<=i; j++) {
            if (j==1 || j==i) x.push(1);
            else x.push(result[i-2][j-2] + result[i-2][j-1]);
        }
        result.push(x);
    }
    return result;
}

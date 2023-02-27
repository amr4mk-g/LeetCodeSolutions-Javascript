var generateMatrix = function(n) {
    let result = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let left = 0, right = n-1, top = 0, bottom = n-1;
    let len = n * n, count = 0;    
    while (count < len){
        for (let i=left; i<=right; i++){ count++;  result[top][i] = count; }
        top++;
        for (let i=top; i<=bottom; i++){ count++;  result[i][right] = count; }
        right--;
        for (let i=right; i>=left; i--){ count++;  result[bottom][i] = count; }
        bottom--;
        for (let i=bottom; i>=top; i--){ count++;  result[i][left] = count; }
        left++;
    }
    return result; 
}

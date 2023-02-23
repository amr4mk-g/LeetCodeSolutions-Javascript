function spiralMatrix (m, n, head) {
    let result = new Array(m).fill(0).map(() => new Array(n).fill(-1))
    let left = 0, right = n-1, top = 0, bottom = m-1;
    let len = n * m, count = 0;    
    while (count < len){
        for (let i=left; i<=right; i++){ 
            count++;
            if (head) { result[top][i] = head.val;  head = head.next; } 
        }
        top++;
        for (let i=top; i<=bottom; i++){ 
            count++;
            if (head) { result[i][right] = head.val;  head = head.next; }  
        }
        right--;
        for (let i=right; i>=left; i--){ 
            count++;
            if (head) { result[bottom][i] = head.val;  head = head.next; }  
        }
        bottom--;
        for (let i=bottom; i>=top; i--){ 
            count++;
            if (head) { result[i][left] = head.val;  head = head.next; }  
        }
        left++;
    }
    return result; 
}

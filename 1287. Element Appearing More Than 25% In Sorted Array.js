function findSpecialInteger (arr) {
    let j=0, x=0, c=1;
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] == arr[i+1]) c++;
        else c=1;
        if (c > x) { x=c; j=i; }
    }
    return arr[j];
}

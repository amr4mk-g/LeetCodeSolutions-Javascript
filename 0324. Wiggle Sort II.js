function wiggleSort (arr){
    let n = arr.length;
    arr.sort((a,b) => (a-b));
    let copy = [...arr];
    let low = Math.floor((n-1)/2), high = n-1;
    for (let i=0; i<n; i++) {
        if (i % 2 == 0) arr[i] = copy[low--];
        else arr[i] = copy[high--];
    }
    return arr;
}

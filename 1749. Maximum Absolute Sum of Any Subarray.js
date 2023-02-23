function maxAbsoluteSum (arr) {
    let max = 0, min = 0, curr = 0;
    for(let v of arr){
        curr += v;
        if (curr > max) max = curr;
        if (curr < min) min = curr;
    }
    return max - min;
}

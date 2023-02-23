function minimumAbsDifference (arr) {
    let min = Infinity, result = [];
    arr.sort((a,b) => a-b);
    for(let i=1; i<arr.length; i++){
        let diff = arr[i] - arr[i-1];
        let x = [arr[i-1], arr[i]];
        if(diff < min){
            min = diff;
            result = [x];
        } else if(diff == min){ result.push(x); }
    }
    return result;
}

function searchRange(nums, target) {
    return [findLeft(nums, target), findRight(nums, target)];
}

function findLeft(arr, v){
    let l = 0, r = arr.length-1;
    while (l <= r) {
        let m = Math.floor((l+r)/2);    
        if (arr[m] == v) {
            if (m != 0 && arr[m-1] == v) r = m-1;
            else return m;
        }
        else if (arr[m] < v) l = m+1;     
        else r = m-1;
    } 
    return -1;
}

function findRight(arr, v){
    let l = 0, r = arr.length-1;
    while (l <= r) {
        let m = Math.floor((l+r)/2);    
        if (arr[m] == v) {
            if (m != arr.length-1 && arr[m+1] == v) l = m+1;  
            else return m;
        }
        else if (arr[m] < v) l = m+1;     
        else r = m-1;
    } 
    return -1;
}

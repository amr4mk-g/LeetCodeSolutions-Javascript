function twoSum (arr, n) {
    let left=0, right=arr.length-1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum == n) {return [left+1, right+1];}
        if (sum < n) {left++;} else {right--;}
    }
}

function numOfSubarrays (arr, k, x) {
    let n = arr.length;
    let sum = 0, j = 0;
    let result = 0;
    for(let i=0; i<n; i++){
        sum += arr[i];
        if(i-j+1 == k){
            if (sum/k >= x) result++;
            sum -= arr[j];
            j++;
        }
    }
    return result;
}

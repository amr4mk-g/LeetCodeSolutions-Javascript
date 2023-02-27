function merge(arr1, m, arr2, n) {
    while(n > 0) {
        if (arr1[m-1] >= arr2[n-1]) {
            m--;
            arr1[n+m] = arr1[m];
        } else {
            n--;
            arr1[n+m] = arr2[n];
        }
    }
}

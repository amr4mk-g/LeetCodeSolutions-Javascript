function getPermutation (n, k) {
    let nums = [], factorial = [1], res = "";
    for (let i=1; i<=n; i++) {  // 1 to n
        nums[i-1] = i;
        factorial[i] = i*factorial[i-1];
    }
    for (let i=n; i>0; i--) {  // n to 1
        let index = Math.ceil(k / factorial[i-1]) - 1;
        res += nums[index];
        nums.splice(index, 1);
        k -= factorial[i-1]*index;
    }
    return res;
}

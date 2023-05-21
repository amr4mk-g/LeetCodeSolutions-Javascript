function isPerfectSquare (num) {
    let left = 1, right = num;
    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        let x = mid*mid;
        if (x == num) return true;
        else if (x < num) left = mid+1;
        else right = mid-1;
    }
    return false;
}

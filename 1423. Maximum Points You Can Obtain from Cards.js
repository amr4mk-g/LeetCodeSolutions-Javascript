function maxScore (cardPoints, k) {
    let n = cardPoints.length;
    let curr = 0, left = 0, right = n-k;
    for (let i=right; i<n; i++) curr += cardPoints[i];
    let max = curr;
    while (right < n) {
        curr += cardPoints[left];
        curr -= cardPoints[right];
        if (curr > max) max = curr;
        right++; 
        left++;
    }
    return max;
}

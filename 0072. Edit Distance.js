function minDistance(str1, str2){
    let len1 = str1.length, len2 = str2.length;  
    let DP = Array(2).fill().map(() => Array(len1+1));
    for (let i=0; i<len1+1; i++) DP[0][i] = i;
    for (let i=1; i<len2+1; i++) {
        for (let j=0; j<len1+1; j++) {
            if (j == 0) DP[i%2][j] = i;
            else if (str1[j-1] == str2[i-1]) DP[i%2][j] = DP[(i-1)%2][j-1];
            else DP[i%2][j] = 1 + Math.min(DP[(i-1)%2][j],
                   DP[i%2][j-1], DP[(i-1)%2][j-1]);  
        }
    }
    return DP[len2%2][len1];
}

function intToRoman (num) {
    let result = "";
    let map = {M:1000, CM:900, D:500, CD:400, C:100, XC: 90, 
               L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
    for (let k in map) {
        while (num >= map[k]) {
            result += k;
            num -= map[k];
        }
    }
    return result;
}

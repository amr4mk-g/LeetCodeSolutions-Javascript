function convertToTitle (n) {
    let result = '';
    while(n > 0) {
        let c = n%26 || 26;
        result = String.fromCharCode(64+c) + result;
        n = (n-c) / 26;
    }
    return result;
}

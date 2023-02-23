function minInsertions(str) {
    let n = str.length;
    let open = 0, count = 0;
    for (let i=0; i<n; i++) {
        if (str[i] == '(') open++;
        else {
            if (open > 0) open--;
            else count++;
            if (str[i+1] == ')') i++;
            else count++;
        }
    }
    return count + open*2;
}

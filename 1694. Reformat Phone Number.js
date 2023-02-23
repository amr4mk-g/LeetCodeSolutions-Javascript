function reformatNumber (number) {
    let len = number.length;
    let result = [];
    let n = 0
    for (let i=0; i<len; i++) {
       let x = number[i];
       if (x != ' ' && x != '-') { n++; result.push(x); }
       if (n==3) { n-=3; result.push('-'); }
    }
    len = result.length;
    if (result[len-1] == '-') result.pop();
    if (result[len-2] == '-') {
      result[len-2] = result[len-3]
      result[len-3] = '-'
    }
    return result.join('');
}

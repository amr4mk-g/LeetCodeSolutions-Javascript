function lengthOfLastWord (s) {
    let x = s.trim().split(' ');
    return x[x.length-1].length;
}

function sortSentence (s) {
    let list = s.split(' ');
    let n = list.length;
    let arr = new Array(n);
    for (let w of list) {
        arr[w[w.length-1]-1] = w.slice(0, w.length-1);
    }
    return arr.join(' ');
}

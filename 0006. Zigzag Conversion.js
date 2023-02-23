function convert(s, numRows) {
    let len = s.length;
    if (len < 3 || numRows == 1) return s;
    let result = Array.from(Array(numRows), ()=>[]); 
    let down = true, curr = 0;
    for (let i=0; i<len; i++) {       
        result[curr].push(s[i]);      
        if (down && curr == numRows-1 || !down && curr == 0) down = !down;
        if (down) {curr++;} else {curr--;}
    }
    return [].concat(...result).join('');
}

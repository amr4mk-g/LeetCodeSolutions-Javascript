function countCharacters (words, chars) {
     let max = 0;
    let count = {};
    for (let v of [...chars]) {
        count[v] = ++count[v] || 1;
    }
    for (let w of words) {
      let x = {...count}, y = true;
      for (let v of [...w]) { 
        if (x[v] > 0) --x[v];
        else { y=false; break; }
      }
      if (y) max += w.length;
    }
    return max;
}

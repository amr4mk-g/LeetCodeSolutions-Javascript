function prefixCount (words, pref) {
    let x=0;
    for (let w of words) {
         if (w.indexOf(pref) == 0) x++;
    }
    return x;
}

function isIsomorphic(s, t) {
    let sl = s.length, tl = t.length;
    if (sl != tl) return false;
    let smap = new Map(), tmap = new Map();
    for (let i=0; i<sl; i++) {
        if (smap.get(s[i]) == undefined) {
            if (tmap.get(t[i]) != undefined) return false;
            smap.set(s[i], t[i]);
            tmap.set(t[i], s[i]);
        } else {
            if (smap.get(s[i]) != t[i]) return false;
        }
    }
    return true;    
}

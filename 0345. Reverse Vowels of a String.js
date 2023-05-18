function reverseVowels (s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    s = [...s], n = s.length;
    let ids = [];
    for (let i=0; i<n; i++) {
        if (vowels.indexOf(s[i]) != -1) ids.push(i);
    } 
    let l = 0, r = ids.length-1;
    while (l < r) {
        [s[ids[l]], s[ids[r]]] = [s[ids[r]], s[ids[l]]];
        l++;  r--;
    }
    return s.join('');
}

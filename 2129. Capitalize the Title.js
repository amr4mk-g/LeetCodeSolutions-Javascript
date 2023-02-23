function capitalizeTitle (title) {
    let strs = title.split(' ');
    let n = strs.length;
    for (let i=0; i<n; i++) {
        let word = strs[i].toLowerCase();
        if (word.length <= 2) strs[i] = word;
        else {
            let x = [word[0].toUpperCase()];
            for (let j=1; j<word.length; j++) x.push(word[j]);
            strs[i] = x.join('');
        }
    }
    return strs.join(' ');
}

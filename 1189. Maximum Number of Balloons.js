function maxNumberOfBalloons (text) {
    let count = {};
    for (let v of [...text]) {
        count[v] = ++count[v] || 1;
    }
    return Math.min(count['b'], count['a'], (count['l']/2)|0,
        (count['o']/2)|0, count['n']) || 0;
}

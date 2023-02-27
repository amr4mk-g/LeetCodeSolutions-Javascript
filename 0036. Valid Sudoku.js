function isValidSudoku (board) {
    let set = new Set();
    for (let i=0; i<9; i++) {
        for (let j=0; j<9; j++) {
            let num = board[i][j];
            let r = num+" row "+i, c = num+" column "+j;
            let b = num+" block "+parseInt(i/3)+"-"+parseInt(j/3);
            if (num != '.') {
                if (set.has(r) || set.has(c) || set.has(b)) return false;
                set.add(r);
                set.add(c);
                set.add(b);
            }
        }
    }
    return true;
}

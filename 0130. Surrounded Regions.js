function solve (board) {
    let n = board.length, m = board[0].length;
    for (let i=0; i<n; i++) { 
        for (let j=0; j<m; j++) {
            if (board[i][j] == 'O') {
                if (i == 0 || i == n-1 || j == 0 || j == m-1) DFS(i, j);
            }
        }
    }
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (board[i][j] == '#') board[i][j] = 'O';
            else board[i][j] = 'X';
        }
    }
    
    function DFS(i, j) {
        if (i < 0 || i >= n || j < 0 || j >= m) return;
        if (board[i][j] == 'X' || board[i][j] == '#') return;
        board[i][j] = '#';
        DFS(i+1, j);  DFS(i-1, j);
        DFS(i, j+1);  DFS(i, j-1);
    }
}

function tictactoe (moves) {
  let rows = [0, 0, 0], cols = [0, 0, 0];
  let xDia = 0, yDia = 0, count = 0;
  for (let [r, c] of moves) {
    let value = (count % 2 == 0) ? 1 : -1;
    rows[r] += value;
    cols[c] += value;
    if (r == c) xDia += value;
    if (r+c == 2) yDia += value;
    let curr = [rows[r], cols[c], xDia, yDia];
    if (curr.includes(3)) return 'A';
    if (curr.includes(-3)) return 'B';
    count++;
  }
  if (count < 9) return 'Pending';
  return 'Draw';
}

function insert (arr, newInterval) {
  let left = [], right = [];
  let [start, end] = newInterval;
  for (let v of arr) {
    if (v[1] < start) left.push(v);
    else if (v[0] > end) right.push(v);
    else {
      start = Math.min(start, v[0]);
      end = Math.max(end, v[1]);
    }
  }
  return [...left, [start, end], ...right]; 
}

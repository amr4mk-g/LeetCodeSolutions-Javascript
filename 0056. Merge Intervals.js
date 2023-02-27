function merge(intervals) {
    let n = intervals.length;
    intervals.sort((a,b) => (a[0]-b[0]));
    let stack = [intervals[0]];
    for (let i=1; i<n; i++) {
        let item = stack.pop();
        if (intervals[i][0] <= item[1]) {
            stack.push([item[0], Math.max(intervals[i][1], item[1])]);
        } else {
            stack.push(item);
            stack.push(intervals[i]);
        }
    }
    return stack;
}

function canReach (arr, start) {
    let n = arr.length;
    let visited = new Set();
    let stack = [start];
    while (stack.length){
        let i = stack.pop();
        visited.add(i);
        if (arr[i] == 0) return true;
        let x = i+arr[i];
        if (x >= 0 && x < n && !visited.has(x)) stack.push(x);
        x = i-arr[i];
        if (x >= 0 && x < n && !visited.has(x)) stack.push(x);
    }
    return false;
}

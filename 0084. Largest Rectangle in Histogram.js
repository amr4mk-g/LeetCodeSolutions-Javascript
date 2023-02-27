function largestRectangleArea (heights) {
    let max = 0, stackID = [];
    heights.push(0);  heights.unshift(0);
    let n = heights.length;
    for (let i=0; i<n; i++) {
        while (stackID && heights[stackID[stackID.length-1]] > heights[i]) {
            let item = stackID.pop();
            let curr = (i-1-stackID[stackID.length-1]) * heights[item];
            if (curr > max) max = curr;
        }
        stackID.push(i);
    }
    return max;
}

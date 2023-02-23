function canSeePersonsCount (heights){
    let n = heights.length;
    let result = new Array(n).fill(0);
    let stack = [];
    for (let i=n-1; i>=0; i--) {
        while (stack.length && stack[stack.length-1] < heights[i]) {
            stack.pop();
            result[i]++;
        }
        if (stack.length) result[i]++;
        stack.push(heights[i]);
    }
    return result;
}

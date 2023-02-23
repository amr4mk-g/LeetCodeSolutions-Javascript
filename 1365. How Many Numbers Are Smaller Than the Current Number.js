function smallerNumbersThanCurrent (nums) {
    let numsSorted = [...nums].sort((a,b) => a-b);
    let result = [];
    for (let v of nums) {
        result.push(numsSorted.indexOf(v));
    }
    return result;
}

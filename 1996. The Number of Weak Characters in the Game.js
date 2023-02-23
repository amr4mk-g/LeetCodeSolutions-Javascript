function numberOfWeakCharacters (properties) {
    // sorting to (0) INC, but if two items equal will sort to (1) DEC
    properties.sort((a,b) => (b[0]-a[0]) || (a[1]-b[1]));
    let result = 0, currMax = 0;
    for(let arr of properties){
        if (arr[1] < currMax) result++;
        else currMax = arr[1];
    }
    return result;
}

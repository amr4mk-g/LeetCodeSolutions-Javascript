function arrayRankTransform (arr) {
    let set = [...new Set(arr)];
    let arrSorted = set.sort((a,b) => (a-b));
    let arr2 = [];
    for (let i=0; i<arr.length; i++) {
      arr2[i] = arrSorted.indexOf(arr[i])+1;
    }
    return arr2;
}

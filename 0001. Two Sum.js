function twoSum (arr, n) { 
     let len = arr.length;
   let count = new Map();
   for (let i=0; i<len; i++) {
       let diff = n-arr[i];
       if (count.get(diff) != undefined) return [i, count.get(diff)];
       else count.set(arr[i], i);
   }
}

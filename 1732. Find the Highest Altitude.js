function largestAltitude (gain) {
     let max = 0, curr = 0;
     for (let i of gain) {
         curr += i;
         if (curr > max) max = curr;
     }
     return max;
}

function countNegatives (grid) {
    let n = 0;
    for (let i of grid) {
      for (let j=i.length-1; j>=0; j--) {
         if (i[j] < 0) n++; 
         else break;
      }
    }
    return n;
}

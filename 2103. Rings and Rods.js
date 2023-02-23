function countPoints (rings) {
    if (rings.length < 6) return 0;
    let max = 0;
    for (let i=0; i<10; i++) {
      let x = rings.indexOf(i);
      if (x != -1) {
         let r = new Set(); 
         r.add(rings[x-1])
         for (let j=x+2; j<rings.length; j+=2) {
            if (rings[j] == i) r.add(rings[j-1])
         }
         if (r.size==3) max++;
      }
    }
    return max;
}

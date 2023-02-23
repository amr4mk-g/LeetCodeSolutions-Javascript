function numIdenticalPairs (nums) {
    let map = new Map();
    let count = 0;
    for(let v of nums){
       if(!map.get(v)) { map.set(v,1); }
       else { count += map.get(v);
          map.set(v, map.get(v)+1);
       }
    }
    return count;
}

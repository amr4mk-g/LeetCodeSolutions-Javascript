function findOriginalArray (changed) {
    if (changed.length % 2 != 0) return [];  
    let map = new Map(), result = [];
    changed.sort((a,b)=>(a-b));
    for (let v of changed) {
        let x = v/2;
        let y = map.get(x);
        if (y != undefined) {
            result.push(x);
            if (y > 1) map.set(x, y-1);
            else map.delete(x);
        } else map.set(v, map.get(v)+1 || 1);
    }
    return (map.size == 0)? result:[];
}

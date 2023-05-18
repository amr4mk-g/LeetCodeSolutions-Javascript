function lengthOfLIS (nums){
    let res = [];
    for (let v of nums){
        let size = res.length; 
        if (size == 0 || v > res[size-1]) res.push(v);
        else {
            let l = 0, r = size;
            while (l < r) {   
                let m = Math.floor((l+r)/2);
                if (v > res[m]) l = m+1;         
                else r = m;   
            }
            res[l] = v;
        }
    }
    return res.length;
}

function removeCoveredIntervals (arr) {  
    arr.sort((a,b)=>( (a[0]==b[0])? b[1]-a[1]:a[0]-b[0] )); 
    let count = 0, curr = 0;    
    for (let [l,r] of arr) { 
        if (r > curr) {curr = r;  count++;}
    }  
    return count;
}

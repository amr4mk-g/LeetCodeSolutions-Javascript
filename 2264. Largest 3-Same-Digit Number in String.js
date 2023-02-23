function largestGoodInteger (num) {
    let max=-1;
    for (let i=0; i<num.length-2; i++) {    
        let y = num[i]===num[i+1] && num[i+1]===num[i+2] 
        if (y) {
          let x = parseInt(num[i]+num[i+1]+num[i+2])
          if(x > max) max = x;
        }  
    }
    if (max == -1) return ""
    if (max == 0) return "000"
    return String(max);
}

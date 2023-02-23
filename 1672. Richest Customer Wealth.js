function maximumWealth (accounts) {
    let max = 0;
    for (let arr of accounts) {
        let curr = arr.reduce((a,b)=>(a+b));
        if (curr > max) max = curr;
    }
    return max;
}

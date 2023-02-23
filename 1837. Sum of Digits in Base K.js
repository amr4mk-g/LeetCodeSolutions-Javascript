function sumBase (n, k) {
    let x = n.toString(k);
    let sum = 0;  
    while (x!=0) { sum += x%10|0;  x/=10; }   
    return sum;
}

function canCompleteCircuit(fuel, distances) { 
    let n = fuel.length;
    let curr = 0, total = 0, result = 0;    
    for (let i=0; i<n; i++) {  
         let x = fuel[i] - distances[i];      
         curr += x;      
         total += x;      
         if (curr < 0) { curr = 0; result = i+1; }  
    }    
    return (total<0)? -1:result;
} 

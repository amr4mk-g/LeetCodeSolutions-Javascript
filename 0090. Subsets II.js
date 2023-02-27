function subsetsWithDup(nums) { 
     let res = [], curr = [];
     function helper(arr){  
         res.push([...curr]);
         for(let i=0; i<arr.length; i++){ 
             if (i== 0 || arr[i] != arr[i-1]) {
                 curr.push(arr[i]);     
                 helper(arr.slice(i+1));    
                 curr.pop(); 
             } 
         }
     }
    nums.sort((a,b)=>(a-b));
    helper(nums);      
    return res;
}

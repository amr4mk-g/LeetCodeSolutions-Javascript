function deepestLeavesSum(root) { //BFS
    if(!root) return 0;          
    let sum = 0, queue = [root];
     while (queue.length){
         let size = queue.length;       
         sum = 0;
         for (let i=0; i<size; i++){
              let item = queue.shift();        
              sum += item.val;
              if(item.left) queue.push(item.left);          
              if(item.right) queue.push(item.right);
          }
     } 
     return sum; 
}

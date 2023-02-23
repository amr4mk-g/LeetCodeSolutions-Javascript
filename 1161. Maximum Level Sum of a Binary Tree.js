function maxLevelSum (root) {
     if(!root) return [];
     let currL=0, currN=0, maxL=0, maxN=-Infinity;
     let queue = [root];
     while(queue.length){
          let length = queue.length;
          let count = 0;
          currL++;
          currN = 0;
          while(count < length){
              let item = queue.shift();
              currN += item.val;
              if(item.left) queue.push(item.left);
              if(item.right) queue.push(item.right);
              count++;
          }
         if (currN > maxN) {
             maxN = currN;
             maxL = currL;
         }
     }
    return maxL;
}

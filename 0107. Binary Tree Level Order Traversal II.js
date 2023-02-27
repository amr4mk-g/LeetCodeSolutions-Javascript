function levelOrderBottom (root) {
     if(!root) return [];
     let data = [], queue = [root];
     while(queue.length){
          let size = queue.length;
          let currLevel = [];
          for (let i=0; i<size; i++){
              let item = queue.shift();
              currLevel.push(item.val);
              if(item.left) queue.push(item.left);
              if(item.right) queue.push(item.right);
          }
         data.unshift(currLevel);
     }  
    return data;
}

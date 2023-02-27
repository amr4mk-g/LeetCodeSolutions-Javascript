function zigzagLevelOrder (root) {
     if(!root) return [];
     let data = [], queue = [root];
     let flip = false;
     while(queue.length){
          let size = queue.length;
          let currLevel = [];
          for (let i=0; i<size; i++){
              let item = queue.shift();
              currLevel.push(item.val);
              if(item.left) queue.push(item.left);
              if(item.right) queue.push(item.right);
          }
         if (flip) {
             currLevel = currLevel.reverse();
             flip = false;
         } else flip = true;
         data.push(currLevel);
     }  
    return data;
}

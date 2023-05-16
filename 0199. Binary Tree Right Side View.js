function rightSideView (root){
    if(!root) return [];
    let right = [];
    let queue = [root];
    while(queue.length){
        let length = queue.length;
        let count = 0;
        while(count < length){
            count++;
            let item = queue.shift();
            if(count == length) right.push(item.val);
            if(item.left) queue.push(item.left);
            if(item.right) queue.push(item.right);
        }
    }
    return right;
}

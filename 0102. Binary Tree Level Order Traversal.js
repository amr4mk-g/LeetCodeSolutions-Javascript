function levelOrder (root){
    if(!root) return [];
    const data = [];
    const queue = [root];
    while(queue.length){
        let length = queue.length;
        let count = 0;
        const currLevel = [];
        while(count < length){
            let item = queue.shift();
            currLevel.push(item.val);
            if(item.left) queue.push(item.left);
            if(item.right) queue.push(item.right);
            count++;
        }
        data.push(currLevel);
    }
    return data;
}

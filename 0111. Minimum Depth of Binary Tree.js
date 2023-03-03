function minDepth (root){
	if (!root) return 0;
	let queue = [root];
	let min = Infinity, max = -Infinity, depth = 1;
	while (queue.length) {
		let size = queue.length;
		for (let i=0; i<size; i++) {
			let node = queue.shift();
            if (!node.left && !node.right) {
                if (depth < min) min = depth;
                if (depth > max) max = depth;
            }
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		depth++;
	}
	return min;
}

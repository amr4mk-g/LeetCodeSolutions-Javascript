class Node {
    constructor() { this.chars = {};  this.End = false; }
}

class Trie {
    constructor() { this.root = new Node(); }

    insert(str) {  // O n - O n
        let node = this.root;
        for (let c of str) {
            let child = node.chars[c] || new Node();
            node.chars[c] = child;
            node = child;
        }
        node.End = true;
    }

    search(str) {  // O n - O 1
        let node = this.root;
        for (let c of str) {
            let child = node.chars[c] || null;
            if (!child) return false;
            node = child;
        }
        return node.End;
    }

    startsWith(str) {  // O n - O 1
        let node = this.root;
        for (let c of str) {
            let child = node.chars[c] || null;
            if (!child) return false;
            node = child;
        }
        return true;
    }
}

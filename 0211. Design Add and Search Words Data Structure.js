class WordDictionary {
  constructor() { this.root = {}; }

  addWord(str) {
    let node = this.root;
    for (let c of str) {
      if (!node[c]) node[c] = {};
      node = node[c];
    }
    node.End = true;
  }

  search(str) {
    function dfs (node, i){
      let c = str[i];
      if (i == str.length) return node.End || false;
      if (c == '.') {
        for (let key in node) {
          if (dfs(node[key], i+1)) return true;
        }
      } else {
          if (node[c]) return dfs(node[c], i+1);
      }
      return false;
    }
    return dfs(this.root, 0);
  }
}

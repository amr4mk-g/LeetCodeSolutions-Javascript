function partition (s) {
    let result = [];
    function helper(curr, str) {
        if (!str.length) result.push(curr);
        for (let i=1; i<=str.length; i++) {
            let part = str.slice(0, i);
            if (check(part)) helper([...curr, part], str.slice(i));
        }
    }
    
    function check(s) {
        let l = 0, r = s.length-1;
        while (l < r) {
            if (s[l] != s[r]) return false;
            l++;  r--;
        }
        return true;
    }
    
    helper ([], s);
    return result;
}

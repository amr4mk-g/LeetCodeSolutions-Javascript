function restoreIpAddresses (s) {
    if (s.length > 12 || s.length < 4) return [];
    let result = [];
    helper(s, []);
    return result;
    
    function helper (s, curr){
        if (curr.length == 4 && !s.length) {
            result.push(curr.join('.'));
            return;
        }
        for (let i=1; i<4; i++) {
            if (s.length < i) continue; 
            let str = s.slice(0,i);
            if ((str.length > 1 && str[0] == '0') || parseInt(str) > 255) continue;
            curr.push(str);
            helper(s.slice(i), curr);
            curr.pop();
        }
    }
}

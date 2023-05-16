function isHappy (n) {
     let set = new Set();
     while (!set.has(n)) {
        set.add(n);
        let s = Array.from(String(n), Number);
		n = 0;
        for (let v of s) n += v**2;
        if (n == 1) return true;
    }
    return false;
}

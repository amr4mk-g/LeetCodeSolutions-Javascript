function combinationSum3 (k, n) {
    let result = [];
    let max = n >= 9 ? 9 : n;
	function recursive(sum, count, start, arr){
		if(sum === 0 && count === 0){
			result.push([...arr]);
			return
		}
		if(count === 0 || start > sum)
			return
		for(let i = start; i <= max; i++){
			if(i <= sum)
				recursive(sum-i, count-1, i+1, [...arr, i])
			else
				break;	
		}
	}
	recursive(n, k, 1, []);
	return result;
}

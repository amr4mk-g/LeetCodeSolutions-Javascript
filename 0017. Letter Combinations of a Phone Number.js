function letterCombinations (digits) {
    let result = [];
    let Keypad = {'2': 'abc', '3': 'def', '4': 'ghi',
        '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};    
    function PhoneKeyPairs (i, digits, bag){
        if (i == digits.length){
            if (bag.length != 0) result.push(bag.join(''));   
            return;
        }
        let chars = Keypad[digits[i]];       
        for (let j=0; j<chars.length; j++){
            bag.push(chars[j]);
            PhoneKeyPairs(i+1, digits, bag);
            bag.pop();
        }
    }
    PhoneKeyPairs(0,digits,[]);
    return result;
}

function sum (num1, num2) {
    while (num2) {
        let carry = num1 & num2;  // common set bits of 1 and 2
        num1 = num1 ^ num2;       // sum of bits of 1 and 2
        num2 = carry << 1;        // shifted carry by one
    }
    return num1;
}

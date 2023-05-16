function rob (nums) {
    let rob1 = 0, rob2 = 0;
    for (let v of nums) {
        let temp = Math.max(v+rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}

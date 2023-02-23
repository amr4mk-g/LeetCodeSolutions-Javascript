function maximum69Number (num) {
    let arr = [...String(num)];
    for (let i=0; i< arr.length; i++) {
        if (arr[i] == "6") {
          arr[i] = "9";
          break;
        }
    }
    return parseInt(arr.join(''));
}

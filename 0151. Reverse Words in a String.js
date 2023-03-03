function reverseWords(string) {
   let words = string.trim().split(/[ ]+/);
   let result = [];
   for (let i=words.length-1; i>=0; i--) {
      result.push(words[i]);
   }
   return result.join(' ');
}

function titleToNumber (t) {
    let result = 0;
    t = t.toLowerCase();
    for(let i=0; i<t.length; i++) 
        result = (result*26) + (t[i].charCodeAt()-96);
    return result;
}

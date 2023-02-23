function suggestedProducts (products, searchWord) {
    products.sort();
    let result = [], n = searchWord.length;
    for (let i=0; i<n; i++) { 
        products = products.filter((w)=>(w[i] == searchWord[i]));
        result.push(products.slice(0,3));
    }
    return result;
}

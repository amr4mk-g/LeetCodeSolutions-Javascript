function isNumber (s) {
    return s != "" && !s.includes("Infinity") && !isNaN(s);
}

function isNumber (s) {
    return (! isNaN(s) ) && ( s.trim() !== "" ) && (! s.includes("Infinity") )
}

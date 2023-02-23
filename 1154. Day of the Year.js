function dayOfYear (date) {
    let d = new Date(date);
    let compare = new Date(d.getFullYear(), 0, 1);
    return Math.floor((d-compare)/1000/60/60/24)+1;
}

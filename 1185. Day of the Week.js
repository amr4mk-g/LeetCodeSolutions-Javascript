function dayOfTheWeek (day, month, year) {
    let d = new Date(year, month-1, day);
    let week = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ');
    return week[d.getDay()];
}

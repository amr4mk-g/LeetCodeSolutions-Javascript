// function angleClock (hour, minutes) {
//     if (hour == 12) hour = 0;
//     let newHour = Math.abs(hour + minutes/60);
//     let angle = Math.abs(newHour - minutes/5)*30;
//     return Math.min(360-angle, angle);
// }

function angleClock (hour, minutes) {
    let minutes_degrees = minutes * 6;  // 1 min = 6 degrees for minute arrow
    let hours_degrees = minutes * 0.5;  // 1 min = 6 degrees for hour arrow
    if (hour == 12) hour = 0;
    let degrees = Math.abs(minutes_degrees-hours_degrees-hour*30);
    if (degrees > 180) degrees = 360 - degrees; 
    return degrees;
}

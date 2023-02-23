function distanceBetweenBusStops (distance, start, destination) {
    if (start > destination) [start, destination] = [destination, start];
    let x = 0; 
    for (let i=start; i<destination; i++){
        x += distance[i];
    }
    let s = distance.reduce((acc,it)=>acc+it);
    return Math.min(x, s-x);
}

function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    if (start === destination) {
        return 0;
    }

    if (start > destination) {
        [start, destination] = [destination, start];
    }

    let clockwiseDistance = 0;
    let counterclockwiseDistance = 0;

    for (let i = 0; i < distance.length; i++) {
        if (i >= start && i < destination) {
            clockwiseDistance += distance[i];
        } else {
            counterclockwiseDistance += distance[i];
        }
    }

    return Math.min(clockwiseDistance, counterclockwiseDistance);
}

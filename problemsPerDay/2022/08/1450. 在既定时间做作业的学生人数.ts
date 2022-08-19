function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] > queryTime || endTime[i] < queryTime) {
            continue;
        }
        count++;
    }
    return count;
}

function countStudents(students: number[], sandwiches: number[]): number {
    let like_1 = students.reduce((a, b) => a + b);
    let like_0 = students.length - like_1;

    for (let i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i] === 0 && like_0 > 0) {
            like_0--;
        } else if (sandwiches[i] === 1 && like_1 > 0) {
            like_1--;
        } else {
            break;
        }
    }

    return like_0 + like_1;
}

function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0;
    let right = letters.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return letters[left] > target ? letters[left] : letters[0];
}

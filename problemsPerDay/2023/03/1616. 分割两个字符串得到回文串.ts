function checkPalindromeFormation(a: string, b: string): boolean {
    return checkPalindromeFormation_(a, b) || checkPalindromeFormation_(b, a);
}

function checkPalindromeFormation_(a: string, b: string): boolean {
    const n = a.length;
    let left = 0,
        right = n - 1;

    while (left < right && a[left] === b[right]) {
        left++;
        right--;
    }

    if (left >= right) {
        return true;
    }

    return checkSelfPalindrome(a, left, right) || checkSelfPalindrome(b, left, right);
}

function checkSelfPalindrome(a: string, left: number, right: number): boolean {
    while (left < right && a[left] === a[right]) {
        left++;
        right--;
    }

    return left >= right;
}

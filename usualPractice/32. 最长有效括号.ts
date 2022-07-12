//方法1 动态规划  时间复杂度O(n) 空间复杂度O(n)
function longestValidParentheses(s: string): number {
    let max = 0;
    const dp: number[] = new Array(s.length).fill(0);

    for (let i = 1; i < s.length; i++) {
        if (s[i] === ")") {
            if (s[i - 1] === "(") {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === "(") {
                dp[i] = dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            max = Math.max(max, dp[i]);
        }
    }

    return max;
}

//方法2 栈 时间复杂度O(n) 空间复杂度O(n)
function longestValidParentheses_(s: string): number {
    let max: number = 0;
    let stack: number[] = [];

    stack.push(-1);

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }

    return max;
}

//方法3 不使用额外空间 时间复杂度O(n) 空间复杂度O(1)
function longestValidParentheses__(s: string): number {
    let max: number = 0;
    let left: number = 0;
    let right: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            max = Math.max(max, left + right);
        } else if (right > left) {
            left = right = 0;
        }
    }

    left = right = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "(") {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            max = Math.max(max, left + right);
        } else if (left > right) {
            left = right = 0;
        }
    }

    return max;
}

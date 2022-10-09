function scoreOfParentheses(s: string): number {
    const st: number[] = [0];

    for (const char of s) {
        if (char === "(") {
            st.push(0);
        } else {
            let v: number = st.pop()!;
            let top: number = st.pop()! + Math.max(2 * v, 1);

            st.push(top);
        }
    }

    return st[0];
}

console.log(scoreOfParentheses("(()(()))"));

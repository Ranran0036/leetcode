function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    for (const token of tokens) {
        if (isOperator(token)) {
            const num2 = stack.pop()!;
            const num1 = stack.pop()!;
            const result = claculate(num1, num2, token);
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
}

function isOperator(token: string): boolean {
    return token === "+" || token === "-" || token === "*" || token === "/";
}

function claculate(num1: number, num2: number, operator: string): number {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2);
        default:
            return 0;
    }
}

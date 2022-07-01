const map: Map<string, number[]> = new Map<string, number[]>();

function diffWaysToCompute(expression: string): number[] {
    if (expression.length === 0) {
        return [];
    }

    if (map.has(expression)) {
        return map.get(expression)!;
    }

    let result: number[] = [];

    let num = 0;
    let index = 0;

    while (index < expression.length && !isOperator(expression[index])) {
        num = num * 10 + +expression[index];
        index++;
    }

    if (index === expression.length) {
        result.push(num);
        map.set(expression, result);
        return result;
    }

    for (let i = 0; i < expression.length; i++) {
        if (isOperator(expression[i])) {
            let result1: number[] = diffWaysToCompute(expression.substring(0, i));
            let result2: number[] = diffWaysToCompute(expression.substring(i + 1));

            for (let j = 0; j < result1.length; j++) {
                for (let k = 0; k < result2.length; k++) {
                    result.push(calculate(result1[j], expression[i], result2[k]));
                }
            }
        }
    }

    map.set(expression, result);
    return result;
}

function calculate(num1: number, op: string, num2: number): number {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        default:
            return -1;
    }
}

function isOperator(c: string): boolean {
    return c === "+" || c === "-" || c === "*";
}

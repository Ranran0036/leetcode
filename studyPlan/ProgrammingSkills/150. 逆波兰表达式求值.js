/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    const stack = [];

    for (const char of tokens) {
        if (char === "+" || char === "-" || char === "*" || char === "/") {
            const num2 = stack.pop();
            const num1 = stack.pop();
            switch (char) {
                case "+":
                    stack.push(num2 + num1);
                    break;
                case "-":
                    stack.push(num1 - num2);
                    break;
                case "*":
                    stack.push(num2 * num1);
                    break;
                case "/":
                    stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
                    break;
            }
        } else {
            stack.push(parseInt(char));
        }
    }

    return stack.pop();
};

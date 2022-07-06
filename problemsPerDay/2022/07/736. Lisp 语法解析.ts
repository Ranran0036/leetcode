function evaluate(expression: string): number {
    const scope = new Map<string, number[]>();
    let vars: string[][] = [];
    let start = 0,
        n = expression.length;
    const stack = [];
    let cur = new Expr(ExprStatus.VALUE);

    while (start < n) {
        if (expression[start] === " ") {
            start++;
            continue;
        }

        if (expression[start] === "(") {
            start++;
            stack.push(cur);
            cur = new Expr(ExprStatus.NONE);
            continue;
        }

        let sb: string = "";

        if (expression[start] === ")") {
            start++;
            if (cur.status === ExprStatus.LET2) {
                sb = cur.value + "";

                for (const v of vars[vars.length - 1]) {
                    scope.get(v)?.pop();
                }
                vars.pop();
            } else if (cur.status === ExprStatus.ADD2) {
                sb = cur.e1 + cur.e2 + "";
            } else {
                sb = cur.e1 * cur.e2 + "";
            }
            cur = stack.pop()!;
        } else {
            while (start < n && expression[start] !== " " && expression[start] !== ")") {
                sb += expression[start];
                start++;
            }
        }

        let token = sb;

        switch (cur.status) {
            case "VALUE":
                cur.value = parseInt(token);
                cur.status = ExprStatus.DONE;
                break;
            case "NONE":
                if ("let" === token) {
                    cur.status = ExprStatus.LET;
                    vars.push([]);
                } else if ("add" === token) {
                    cur.status = ExprStatus.ADD;
                } else if ("mult" === token) {
                    cur.status = ExprStatus.MULT;
                }
                break;
            case "LET":
                if (expression[start] === ")") {
                    cur.value = calculateToken(scope, token);
                    cur.status = ExprStatus.LET2;
                } else {
                    cur.v = token;
                    vars[vars.length - 1].push(token);
                    cur.status = ExprStatus.LET1;
                }
                break;
            case "LET1":
                if (!scope.has(cur.v)) {
                    scope.set(cur.v, []);
                }
                scope.get(cur.v)!.push(calculateToken(scope, token));
                cur.status = ExprStatus.LET;
                break;
            case "ADD":
                cur.e1 = calculateToken(scope, token);
                cur.status = ExprStatus.ADD1;
                break;
            case "ADD1":
                cur.e2 = calculateToken(scope, token);
                cur.status = ExprStatus.ADD2;
                break;
            case "MULT":
                cur.e1 = calculateToken(scope, token);
                cur.status = ExprStatus.MULT1;
                break;
            case "MULT1":
                cur.e2 = calculateToken(scope, token);
                cur.status = ExprStatus.MULT2;
                break;
        }
    }
    return cur.value;
}

function calculateToken(scope: Map<string, number[]>, token: string): number {
    if (token[0] >= "a" && token[0] <= "z") {
        const n = scope.get(token)!.length;
        return scope.get(token)![n - 1];
    } else {
        return parseInt(token);
    }
}

const ExprStatus = {
    VALUE: "VALUE",
    NONE: "NONE",
    LET: "LET",
    LET1: "LET1",
    LET2: "LET2",
    ADD: "ADD",
    ADD1: "ADD1",
    ADD2: "ADD2",
    MULT: "MULT",
    MULT1: "MULT1",
    MULT2: "MULT2",
    DONE: "DONE",
};

class Expr {
    status: string;
    v: string;
    value: number;
    e1: number;
    e2: number;

    constructor(s: string) {
        this.status = s;
        this.v = "";
        this.value = 0;
        this.e1 = 0;
        this.e2 = 0;
    }
}

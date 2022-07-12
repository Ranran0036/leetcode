function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];

    for (const aster of asteroids) {
        let alive: boolean = true;

        while (alive && stack.length > 0 && stack[stack.length - 1] > 0 && aster < 0) {
            alive = stack[stack.length - 1] < -aster;

            if (stack[stack.length - 1] <= -aster) {
                stack.pop();
            }
        }

        if (alive) {
            stack.push(aster);
        }
    }

    return stack;
}

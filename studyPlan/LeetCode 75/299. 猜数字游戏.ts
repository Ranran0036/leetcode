function getHint(secret: string, guess: string): string {
    let map = new Map();
    let a = 0,
        b = 0;
    for (let i = 0; i < secret.length; i++) {
        map.set(secret[i], map.has(secret[i]) ? map.get(secret[i]) + 1 : 1);
    }
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            a++;
            map.set(secret[i], map.get(secret[i]) - 1);
            if (map.get(secret[i]) === 0) map.delete(secret[i]);
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (map.has(guess[i]) && guess[i] !== secret[i]) {
            b++;
            map.set(guess[i], map.get(guess[i]) - 1);
            if (map.get(guess[i]) === 0) map.delete(guess[i]);
        }
    }
    return `${a}A${b}B`;
}

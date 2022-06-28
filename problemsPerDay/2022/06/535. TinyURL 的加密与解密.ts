const dataBase = new Map<string, string>();

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    let key: string;

    while (true) {
        key = "" + Math.random() * Number.MAX_SAFE_INTEGER;
        if (!dataBase.has(key)) {
            break;
        }
    }

    dataBase.set(key, longUrl);
    return "http://tinyurl.com/" + key;
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    const p = shortUrl.lastIndexOf("/") + 1;
    const key = shortUrl.substring(p);
    return dataBase.get(key)!;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

/**
 * @param {string} queryIP
 * @return {string}
 */
const validIPAddress = function (queryIP) {
    const ans = ["Neither", "IPv4", "IPv6"];
    if (queryIP.indexOf(".") !== -1) {
        let last = -1;

        for (let i = 0; i < 4; i++) {
            const cur = i === 3 ? queryIP.length : queryIP.indexOf(".", last + 1);
            if (cur < 0) {
                return ans[0];
            }
            if (cur - last - 1 > 3 || cur - last - 1 < 1) {
                return ans[0];
            }

            let addr = 0;

            for (let j = last + 1; j < cur; ++j) {
                if (!isDigit(queryIP[j])) {
                    return ans[0];
                }
                addr = addr * 10 + (queryIP[j].charCodeAt() - "0".charCodeAt());
            }
            if (addr > 255) {
                return ans[0];
            }
            if (addr > 0 && queryIP[last + 1].charCodeAt() === "0".charCodeAt()) {
                return ans[0];
            }
            if (addr === 0 && cur - last - 1 > 1) {
                return ans[0];
            }
            last = cur;
        }
        return ans[1];
    } else {
        let last = -1;
        for (let i = 0; i < 8; ++i) {
            const cur = i === 7 ? queryIP.length : queryIP.indexOf(":", last + 1);
            if (cur < 0) {
                return ans[0];
            }
            if (cur - last - 1 < 1 || cur - last - 1 > 4) {
                return ans[0];
            }
            for (let j = last + 1; j < cur; ++j) {
                if (!isDigit(queryIP[j]) && !("a" <= queryIP[j].toLowerCase() && queryIP[j].toLowerCase() <= "f")) {
                    return ans[0];
                }
            }
            last = cur;
        }
        return ans[2];
    }
};

const isDigit = (str) => {
    return parseFloat(str).toString() === "NaN" ? false : true;
};

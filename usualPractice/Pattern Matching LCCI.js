let patternMatching = function (pattern, value) {
    if (pattern == '' && value =='') return true;
    let i = 0, a = 0, b = 0, tick_b = null, tick_a = null;
    const l = value.length, p_l = pattern.length;
    while (i < p_l) {
        if (pattern[i] == 'a') {
            tick_a = tick_a === null ? i : tick_a;
            a++;
        } else if (pattern[i] == 'b') {
            tick_b = tick_b === null ? i : tick_b;
            b++;
        }
        i++;
    }
    let x = 0, y = 0, max_x = 0;
    if (a == 0) {
        max_x = 0;
    } else {
        max_x = l / a;
    }
    if (b == 0) {
        x = max_x;
    }
    while (x <= max_x) {
        y = (l - a * x) / b || 0;
        if (parseInt(y) != y) {
            x++;
            continue;
        };
        let i = 0, start = 0, res = false;
        let p_x = tick_a == 0 ? value.substr(0, x) : value.substr(tick_a * y, x),
        p_y = tick_b == 0 ? value.substr(0, y) : value.substr(tick_b * x, y);
        if (tick_b == null) {
            p_y = null;
        }
        if (tick_a == null) {
            p_x = null;
        }
        while (i < p_l) {
            let l_i = pattern[i] == 'a' ? x: y, c = pattern[i] == 'a' ? p_x : p_y;
            let tem = value.substr(start, l_i);
            start = start + l_i;
            if ( tem != c ) {
                res = true;
                break;
            }
            i++;
        }
        if (res == false && p_x !=p_y) {
            return true;
        }
        x++;
    }
    return false;
};

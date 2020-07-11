var isUnique = function(astr) {
    let arr = astr.split('');

    let delRepeat = Array.from(new Set(arr)).join('');
    console.log(delRepeat)

    return delRepeat.length === astr.length
};

isUnique('abc')
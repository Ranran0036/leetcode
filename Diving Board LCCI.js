let divingBoard = function(shorter, longer, k) {
    let result = [];

    if(k == 0){
        return result;
    }

    for(let i = k; i>=0; i--){
        result.push(shorter*i + longer*(k-i));
    }

    return Array.from(new Set(result));
};
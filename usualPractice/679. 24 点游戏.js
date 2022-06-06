const funs = ["+", "-", "*", "/"].map((operator) => ({
    fun: new Function("a", "b", `return a ${operator} b`),
    operator,
}));
var judgePoint24 = function (nums) {
    if (nums.length === 1) return Math.abs(nums[0] - 24) < 1e-6;
    const l = nums.length;
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            const rest = nums.filter((_, ix) => ix !== i && ix !== j);
            const res = funs.some(
                ({ fun, operator }) =>
                    judgePoint24([fun(nums[i], nums[j]), ...rest]) || (~["-", "/"].indexOf(operator) && judgePoint24([fun(nums[j], nums[i]), ...rest]))
            );
            if (res) return true;
        }
    }
    return false;
};

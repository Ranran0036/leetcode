//每次选中门之后 排除一个错误答案 再换门
const pickDoor = (doors) => {
    let pick = Math.floor(Math.random() * 3);

    // 得到主持人去掉的门
    let remove = getRemove(doors, pick);

    // 换门
    let pickArr = [0, 1, 2].filter((item) => item !== pick && item !== remove);
    return pickArr[0];
};

const getRemove = (doors, pick) => {
    if (doors[pick] === 1) {
        let removeArr = [0, 1, 2].filter((item) => item !== pick);
        return removeArr[Math.floor(Math.random() * 2)];
    } else {
        for (let i = 0; i < 3; i++) {
            if (doors[i] === 0 && i !== pick) {
                return i;
            }
        }
    }
};

const test = () => {
    let winTimes = 0;
    for (let i = 0; i < 10000000; i++) {
        let doors = getDoors();
        let pick = pickDoor(doors);
        if (doors[pick] === 1) {
            winTimes++;
        }
    }

    console.log(winTimes);
};

const getDoors = () => {
    let arr = [0, 0, 0];

    let random = Math.floor(Math.random() * 3);

    arr[random] = 1;

    return arr;
};

test();

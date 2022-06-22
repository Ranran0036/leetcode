function findRotation(mat: number[][], target: number[][]): boolean {
    let ans: boolean = false;

    if (checkMatrix(mat, target)) {
        return true;
    }

    for (let i = 0; i < 3; i++) {
        rotateMatrix(mat);
        if (checkMatrix(mat, target)) {
            return true;
        }
    }

    return ans;
}

//rotate matrix 90 degree clockwise
function rotateMatrix(mat: number[][]): void {
    //对角线翻转
    for (let i = 0; i < mat.length; i++) {
        for (let j = i; j < mat[0].length; j++) {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
        }
    }

    //垂直翻转
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length / 2; j++) {
            [mat[i][j], mat[i][mat.length - j - 1]] = [mat[i][mat.length - j - 1], mat[i][j]];
        }
    }
}

function checkMatrix(mat: number[][], target: number[][]): boolean {
    let ans: boolean = false;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === target[i][j]) {
                ans = true;
            } else {
                return false;
            }
        }
    }

    return ans;
}

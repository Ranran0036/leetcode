/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var kthSmallestPrimeFraction = function(arr, k) {
    let arrA = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            arrA.push([arr[i] , arr[j]])
        }
    }

    

    arrA.sort(function(a , b){
        return (a[0]/a[1] - b[0]/b[1])
    })
    console.log(arrA)

    return arrA[k-1]
};

kthSmallestPrimeFraction([1,7] , 1);
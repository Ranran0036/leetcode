let addBinary = function(a, b) {
    a = addZero(a , b).a;
    b = addZero(a , b).b;

    let res = '';

    let lastAdd = '0';

    for(let i = a.length - 1; i >= 0; i--){
        let [oriAdd , fiAdd] = addBinary_(a[i] , b[i]);
        
        let [trueAdd , seAdd] = addBinary_(oriAdd , lastAdd);

        res = trueAdd + res;

        lastAdd = (fiAdd === '1' || seAdd === '1') ? '1' : '0';
    }

    if(lastAdd === '1'){
        res = lastAdd + res;
    }

    return res;
};

let addBinary_ = function(a , b){
    if(a == '0' && b == '0'){
        return ['0' , '0'];
    }

    if((a == '0' && b == '1') || (a == '1' && b == '0')){
        return ['1' , '0'];
    }

    if(a == '1' && b == '1'){
        return ['0' , '1'];
    }
}

let addZero = function(a , b){
    let diff = a.length - b.length;

    if(diff > 0){
        for(let i = 1; i <= diff; i++){
            b = '0' + b;
        }
    }else if(diff < 0){
        for(let i = -1; i >= diff; i--){
            a = '0' + a;
        }
    }

    return {
        a : a,
        b : b
    }
}

console.log(addBinary('1','11'));
console.log(addBinary("1010","1011"));



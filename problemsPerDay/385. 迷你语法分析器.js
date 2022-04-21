/*     NestedInteger deserialize(string s) {
    if(s.empty()) return NestedInteger();
    if(s[0]!='[')  return NestedInteger(stoi(s));
    if(s.size()<=2) return NestedInteger();
    NestedInteger res;
    int start=1,cnt=0;
    for (int i=1;i<s.size();i++){
        if(cnt==0&&(s[i]==','||i==s.size()-1)){
            res.add(deserialize(s.substr(start,i-start)));
            start=i+1;
        } 
        else if(s[i]=='[') cnt++;
        else if(s[i]==']') cnt--;
    }
    return res;
} */

/**
 * @param {string} s
 * @return {NestedInteger}
 */
const deserialize = function (s) {
    if (s.length === 0) return new NestedInteger();
    if (s[0] !== "[") return new NestedInteger(parseInt(s));
    if (s.length === 2) return new NestedInteger();
    let res = new NestedInteger();
    let start = 1,
        cnt = 0;
    for (let i = 1; i < s.length; i++) {
        if (cnt === 0 && (s[i] === "," || i === s.length - 1)) {
            res.add(deserialize(s.substring(start, i)));
            start = i + 1;
        } else if (s[i] === "[") {
            cnt++;
        } else if (s[i] === "]") {
            cnt--;
        }
    }
    return res;
};

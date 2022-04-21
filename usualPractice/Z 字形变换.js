/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 let convert = function(s, numRows) {
    if(numRows == 1){
        return s;
    }
    
   let ans = new Array(numRows).fill('');

   for(let i = 0; i < s.length; i++){
       let k = i % (2*numRows - 2);

       if(k <= numRows-1){
           ans[k] += s[i];
       }else{
           ans[2*numRows-2-k] += s[i];
       }
   }

   return ans.join('');
};
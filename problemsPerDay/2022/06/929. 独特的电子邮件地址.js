/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
    return emails.reduce((acc, cur) => acc.add(cur.replace(/(\.)(?=.*@)|(\+.*)(?=@)/g, "")), new Set()).size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]));

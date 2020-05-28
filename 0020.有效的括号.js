/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const obj = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let arr = []
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (obj[element] === undefined) {
            arr.push(element)
        } else if (obj[element] === arr[arr.length-1]) {
            arr.pop()
        } else {
            return false
        }
    }

    return arr.length === 0
};

console.log(isValid("()"));
// 22. Generate Parentheses(Medium)
// https://leetcode.com/problems/generate-parentheses/


const generateParenthesis = n => {

    const arr_parenthesis = [
        ['()']
    ];

    const add_parenthesis = (a, b) => {
        const set = new Set();
        for (let x of arr_parenthesis[a - 1]) {
            for (let y of arr_parenthesis[b - 1]) {
                set.add(x + y);
                set.add(y + x);
            }
        }
        return set;
    }


    if (n === 1) {
        return arr_parenthesis[0];
    }
    for (let i = 2; i <= n; i++) {
        let set = new Set();
        for (let j = 1; j <= i / 2; j++) {
            set = new Set([...set, ...add_parenthesis(j, i - j)]);
        }
        for (let x of arr_parenthesis[i - 2]) {
            set.add('(' + x + ')');
        }
        arr_parenthesis.push([...set]);
    }
    console.log(arr_parenthesis[n - 1]);
    return arr_parenthesis[n - 1];
}


const n = 4;

console.log(generateParenthesis(n));
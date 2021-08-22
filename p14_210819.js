// 자릿수 더하기(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/12931

const solution = n => {
    const str = n + '';
    const arr = new Array(str.length).fill().map((v, i) => str[i] - 0);
    return arr.reduce((a, b) => a + b);
}

const n = 123;

// const n = 987;

console.log(solution(n));

// x만큼 간격이 있는 n개의 숫자(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/12954

const solution = (x, n) => new Array(n).fill().map((v, i) => ++i * x);

const x = 2;
const n = 5;

// const x = 4;
// const n = 3;

// const x = -4;
// const n = 2;

console.log(solution(x, n));
// 없는 숫자 더하기(Level1)
// https://programmers.co.kr/learn/courses/30/lessons/86051

const solution = numbers => 45 - numbers.reduce((a, b) => a + b);

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

// const numbers = [5, 8, 4, 0, 6, 7, 9];

console.log(solution(numbers));

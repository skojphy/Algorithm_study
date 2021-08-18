// 평균 구하기(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/12944

const solution = (arr) =>  arr.reduce((a, b) => a + b) / arr.length;

// const arr = [1, 2, 3, 4];

const arr = [5, 5];

console.log(solution(arr));
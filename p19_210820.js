// 정수 내림차순으로 배치하기(Level1)
// https://programmers.co.kr/learn/courses/30/lessons/12933

const solution = n => Number((n.toString()).split('').map(a => a - 0).sort((a, b) => b - a).join(''));

const n = 118372;

console.log(solution(n));
// 문자열 내림차순으로 배치하기(Level1)
// https://programmers.co.kr/learn/courses/30/lessons/12917

const solution = s => s.split('').sort().reverse().join('');

const s = 'Zbcdefg';

console.log(solution(s));

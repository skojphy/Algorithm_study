// 약수의 합(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/12928

const solution = (n, a = 0, b = n) => (n / 2 < a ? b : solution(n, a + 1, (b += n % a ? 0 : a)));

const n = 12;

// const n = 5;

console.log(solution(n));

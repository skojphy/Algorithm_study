const solution = (a, b) => (a > b ? ((a + b) * (a - b + 1)) / 2 : ((a + b) * (b - a + 1)) / 2);

const a = 3;
const b = 5;

console.log(solution(a, b));

const solution = (arr, divisor) =>
  arr.filter(e => !(e % divisor)).sort((a, b) => a - b).length > 0
    ? arr.filter(e => !(e % divisor)).sort((a, b) => a - b)
    : [-1];

const arr = [5, 9, 7, 10];
const divisor = 5;

console.log(solution(arr, divisor));

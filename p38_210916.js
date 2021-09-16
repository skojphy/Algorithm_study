const solution = arr => arr.filter((v, i) => i === 0 || arr[i] !== arr[i - 1]);

const arr = [1, 1, 3, 3, 0, 1, 1];

console.log(solution(arr));

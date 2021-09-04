// 약수의 개수와 덧셈(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/77884

const solution = (left, right) => {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += i;
  }
  for (let i = Math.ceil(Math.sqrt(left)); i <= Math.sqrt(right); i++) {
    sum -= 2 * i * i;
  }
  return sum;
};

const left = 13;
const right = 17;

// const left = 24;
// const right = 27;

console.log(solution(left, right));

const solution = numbers =>
  (
    numbers
      .map(a => a + '')
      .sort((a, b) => b + a - (a + b))
      .join('') - 0
  ).toString();

// const numbers = [6, 10, 2];

// const numbers = [3, 30, 34, 5, 9];

// const numbers = [9, 997, 99, 878, 87];

const numbers = [0, 0, 0, 0];

console.log(solution(numbers));

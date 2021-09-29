const solution = (s, e) => {
  let queue = [s];
  const check = new Array(10001).fill(0);
  let jump = 0;
  while (true) {
    const current = [...queue];
    queue = [];
    console.log(jump, current);
    for (let x of current) {
      if (x === e) {
        return jump;
      }
      if (check[x - 1] === 0) {
        check[x - 1] = 1;
        queue.push(x - 1);
      }
      if (check[x + 1] === 0) {
        check[x + 1] = 1;
        queue.push(x + 1);
      }
      if (check[x + 5] === 0) {
        check[x + 5] = 1;
        queue.push(x + 5);
      }
    }
    jump += 1;
  }
};

const s = 5;
const e = 14;

console.log(solution(s, e));

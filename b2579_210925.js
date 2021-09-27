const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const numOfStairs = +input[0];
  const nums = input.slice(1).map(a => +a);

  const scores = [0, 0, 0, ...nums];
  const arr = [...scores];

  for (let i = 3; i < numOfStairs + 3; i++) {
    arr[i] += Math.max(arr[i - 3] + scores[i - 1], arr[i - 2]);
  }

  console.log(arr.pop());

  process.exit();
});

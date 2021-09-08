const solution = (progresses, speeds) => {
  let max = 1;
  let count = 1;
  const answer = [];
  const arr = progresses
    .map((el, i) => Math.ceil((100 - el) / speeds[i]))
    .map(el => (max = Math.max(el, max)));
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      answer.push(count);
      count = 1;
      if (i === arr.length - 1) {
        answer.push(count);
      }
    } else {
      count += 1;
      if (i === arr.length - 1) {
        answer.push(count);
      }
    }
  }
  return answer;
};

// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));

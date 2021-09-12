// K번째 수(Level1)
// https://programmers.co.kr/learn/courses/30/lessons/42748

const solution = (array, commands) => {
  const answer = [];
  commands.forEach(element =>
    answer.push(array.slice(element[0] - 1, element[1]).sort((a, b) => a - b)[element[2] - 1])
  );
  return answer;
};

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));

const solution = citations =>
  citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;

const citations = [3, 0, 6, 1, 5];

console.log(solution(citations));

// 음양 더하기(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/76501

const solution = (absolutes, signs) => {
  let answer = 0;
  absolutes.forEach((v, i) => {
    if (signs[i] === true) {
      answer += v;
    } else {
      answer -= v;
    }
  });
  return answer;
};

// const absolutes = [4, 7, 12];
// const signs = [true, false, true];

const absolutes = [1, 2, 3];
const signs = [false, false, true];

console.log(solution(absolutes, signs));
